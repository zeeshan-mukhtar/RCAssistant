import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import emailRouter from './src/routes/email';

export async function registerRoutes(app: Express): Promise<Server> {
  // Register email route
  app.use('/api', emailRouter);
  
  // Chat messages API
  app.post("/api/chat", async (req, res) => {
    try {
      const validatedData = insertChatMessageSchema.parse(req.body);
      
      // Store the user message
      await storage.createChatMessage(validatedData);
      
      // Generate assistant response
      const assistantResponse = await generateAssistantResponse(validatedData.content);
      
      // Store the assistant response
      await storage.createChatMessage({
        sender: "assistant",
        content: assistantResponse,
        sessionId: validatedData.sessionId
      });
      
      res.json({ 
        message: assistantResponse 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          error: fromZodError(error).message 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to process chat message" 
        });
      }
    }
  });
  
  // Get chat history by session ID
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const sessionId = req.params.sessionId;
      const messages = await storage.getChatMessagesBySessionId(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to fetch chat messages" 
      });
    }
  });
  
  // Demo request API
  app.post("/api/demo-request", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      res.status(201).json(demoRequest);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          error: fromZodError(error).message 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to submit demo request" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to generate responses based on user input
async function generateAssistantResponse(userMessage: string): Promise<string> {
  const userMessageLower = userMessage.toLowerCase();
  
  // Simple response logic based on keywords in the message
  if (userMessageLower.includes("password") && (userMessageLower.includes("reset") || userMessageLower.includes("forgot"))) {
    return "I can help you reset your password. I'll send a reset link to your registered email address. Would you like me to do that now?";
  } else if (userMessageLower.includes("yes") || userMessageLower.includes("please")) {
    return "Great! I've sent a password reset link to your email. You should receive it within the next minute. Is there anything else you need help with?";
  } else if (userMessageLower.includes("thank")) {
    return "You're welcome! Feel free to reach out if you need anything else. Have a great day!";
  } else if (userMessageLower.includes("help") || userMessageLower.includes("support")) {
    return "I'm here to help! I can assist with password resets, access requests, software troubleshooting, and answering questions about company policies. What do you need help with today?";
  } else if (userMessageLower.includes("feature") || userMessageLower.includes("capabilities")) {
    return "AIagentBot can help with IT support, password resets, software installations, policy questions, and automate many routine tasks. We integrate with your existing systems and provide instant, accurate responses.";
  } else if (userMessageLower.includes("demo")) {
    return "I'd be happy to arrange a demo for you! You can fill out the contact form at the bottom of this page, and our team will reach out to schedule a personalized demonstration.";
  } else {
    return "Hello! I'm AIagentBot. How can I help you today?";
  }
}
