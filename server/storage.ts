import { users, type User, type InsertUser, type ChatMessage, type InsertChatMessage, type DemoRequest, type InsertDemoRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Chat message methods
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessagesBySessionId(sessionId: string): Promise<ChatMessage[]>;
  
  // Demo request methods
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private chatMessages: Map<number, ChatMessage>;
  private demoRequests: Map<number, DemoRequest>;
  currentId: number;
  chatMessageId: number;
  demoRequestId: number;

  constructor() {
    this.users = new Map();
    this.chatMessages = new Map();
    this.demoRequests = new Map();
    this.currentId = 1;
    this.chatMessageId = 1;
    this.demoRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    const id = this.chatMessageId++;
    const chatMessage: ChatMessage = { 
      ...message, 
      id, 
      timestamp: new Date() 
    };
    this.chatMessages.set(id, chatMessage);
    return chatMessage;
  }
  
  async getChatMessagesBySessionId(sessionId: string): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter(message => message.sessionId === sessionId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }
  
  async createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest> {
    const id = this.demoRequestId++;
    const demoRequest: DemoRequest = {
      ...request,
      id,
      createdAt: new Date()
    };
    this.demoRequests.set(id, demoRequest);
    return demoRequest;
  }
}

export const storage = new MemStorage();
