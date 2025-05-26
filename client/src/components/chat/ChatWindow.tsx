import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import { initialMessages, messageFlows, presetQuestions } from "@/lib/chatMessages";
import { v4 as uuidv4 } from "uuid";

interface ChatWindowProps {
  variant?: "demo" | "fixed";
  className?: string;
  demoFlow?: keyof typeof messageFlows;
  autoplay?: boolean;
}

export default function ChatWindow({ 
  variant = "demo", 
  className = "", 
  demoFlow,
  autoplay = false
}: ChatWindowProps) {
  const [messages, setMessages] = useState([...initialMessages]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [sessionId] = useState(uuidv4());
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Auto-advance through message flow for demo
  useEffect(() => {
    if (demoFlow && autoplay && currentFlowIndex < messageFlows[demoFlow].length) {
      const timer = setTimeout(() => {
        const nextMessage = messageFlows[demoFlow][currentFlowIndex];
        setMessages(prev => [...prev, nextMessage]);
        setCurrentFlowIndex(prev => prev + 1);
      }, currentFlowIndex === 0 ? 1000 : 3000);
      
      return () => clearTimeout(timer);
    }
  }, [demoFlow, autoplay, currentFlowIndex]);
  
  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]);
  
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = {
      id: uuidv4(),
      sender: 'user' as const,
      content: inputValue.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    try {
      // We would actually call the API in a real implementation
      // For now, we'll simulate a response
      setTimeout(() => {
        const assistantMessage = {
          id: uuidv4(),
          sender: 'assistant' as const,
          content: getAssistantResponse(inputValue.trim()),
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 1500);
      
    } catch (error) {
      console.error("Failed to send message:", error);
      setIsTyping(false);
    }
  };
  
  // Simple keyword-based response simulation
  const getAssistantResponse = (message: string): string => {
    const messageLower = message.toLowerCase();
    
    if (messageLower.includes("password") && (messageLower.includes("reset") || messageLower.includes("forgot"))) {
      return "I can help you reset your password. I'll send a reset link to your registered email address. Would you like me to do that now?";
    } else if (messageLower.includes("yes") || messageLower.includes("please")) {
      return "Great! I've sent a password reset link to your email. You should receive it within the next minute. Is there anything else you need help with?";
    } else if (messageLower.includes("thank")) {
      return "You're welcome! Feel free to reach out if you need anything else. Have a great day!";
    } else if (messageLower.includes("help") || messageLower.includes("support")) {
      return "I'm here to help! I can assist with password resets, access requests, software troubleshooting, and answering questions about company policies. What do you need help with today?";
    } else if (messageLower.includes("feature") || messageLower.includes("capabilities")) {
      return "AIagentBot can help with IT support, password resets, software installations, policy questions, and automate many routine tasks. We integrate with your existing systems and provide instant, accurate responses.";
    } else if (messageLower.includes("demo")) {
      return "I'd be happy to arrange a demo for you! You can fill out the contact form at the bottom of this page, and our team will reach out to schedule a personalized demonstration.";
    } else {
      return "Hello! I'm AIagentBot. How can I help you today?";
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handlePresetClick = (question: string) => {
    setInputValue(question);
  };
  
  return (
    <div className={`flex flex-col rounded-xl overflow-hidden border border-neutral-200 shadow-lg bg-white ${className}`}>
      <div className="p-3 border-b border-neutral-200 bg-neutral-50 flex items-center">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
        <div className="ml-4 text-sm font-medium text-neutral-500">AIagentBot</div>
      </div>
      
      <div className="h-72 md:h-80 overflow-y-auto" ref={scrollAreaRef}>
        <div className="p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChatMessage message={message} />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2 text-neutral-400 text-sm pl-2"
            >
              <div>AIagentBot is typing</div>
              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                  transition: { duration: 1.5, repeat: Infinity }
                }}
              >
                ...
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      
      {variant === "demo" && (
        <div className="p-2 border-t border-neutral-100 bg-neutral-50">
          <div className="flex flex-wrap gap-2 justify-center">
            {presetQuestions.map((question, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => handlePresetClick(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      <div className="p-3 border-t border-neutral-200 flex">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your question here..."
          className="flex-1 border border-neutral-300 focus:border-primary"
          onKeyDown={handleKeyDown}
        />
        <Button
          className="ml-2 bg-primary hover:bg-primary-700"
          onClick={handleSendMessage}
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
