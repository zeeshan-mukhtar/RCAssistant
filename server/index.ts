import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import https from "https";
import fs from "fs";

// Always load .env from the server directory

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { dirname } from 'path';

// Optional dotenv import with error handling
try {
  await import('dotenv/config');
} catch (error) {
  console.log('No .env file found, using default configuration');
}


// Get directory path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***set***' : '***missing***');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);
  
  // SSL certificate and key configuration with fallback to HTTP for development
  let httpsServer;
  try {
    const sslOptions = {
      key: fs.readFileSync(process.env.SSL_KEY_PATH || path.resolve(__dirname, 'aiprivate.pfx'), 'utf8'),
      cert: fs.readFileSync(process.env.SSL_CERT_PATH || path.resolve(__dirname, 'ai.crt'), 'utf8'),
    };
    httpsServer = https.createServer(sslOptions, app);
    console.log('SSL certificates loaded successfully, running in HTTPS mode');
  } catch (error: any) {
    console.log('SSL certificates not found or invalid:', error.message);
    console.log('Falling back to HTTP for development');
    httpsServer = app;
  }
  
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Use HTTPS port 443 or fallback to 3000 for HTTP
  const port = httpsServer instanceof https.Server ? (process.env.HTTPS_PORT || 443) : (process.env.PORT || 3000);
  httpsServer.listen({
    port,
    host: "0.0.0.0"
  }, () => {
    const protocol = httpsServer instanceof https.Server ? 'https' : 'http';
    log(`Server running and accessible at:`);
    log(`- Local: ${protocol}://localhost:${port}`);
    log(`- Network: ${protocol}://0.0.0.0:${port}`);
    log(`- LAN: ${protocol}://192.168.7.210:${port}`);
  }).on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EACCES') {
      console.error(`Error: Port ${port} requires elevated privileges. Please run as administrator.`);
    } else {
      console.error('Failed to start server:', err.message);
    }
    process.exit(1);
  });
})();
