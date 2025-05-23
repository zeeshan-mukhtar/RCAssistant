import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ChatInterface from "@/components/playground/ChatInterface";
import ThemeProvider from "@/components/playground/ThemeProvider";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface SamplePrompt {
  text: string;
  highlighted: string;
}

const samplePrompts: SamplePrompt[] = [
  {
    text: "How do I reset my password?",
    highlighted: "reset my password"
  },
  {
    text: "I need help with software installation",
    highlighted: "software installation"
  },
  {
    text: "How do I request access to a new application?",
    highlighted: "request access"
  }
];

const responses: Record<string, string> = {
  "How do I reset my password?": `**1.** I'll help you reset your password. First, let's verify your identity.\n\n---\n\n**2.** Would you like to receive a verification code via:\n\n[Email] [Phone]\n\n---\n\n**3.** Once verified, I'll guide you through the password reset process.`,
  "Email": `**1.** Great choice! I'll send a verification code to your registered email address.\n\n---\n\n**2.** Please check your email and enter the code when prompted.\n\n---\n\n**3.** If you don't receive the code within 5 minutes, you can:\n\n[Request new code] [Try phone instead]`,
  "Phone": `**1.** I'll send a verification code to your registered phone number.\n\n---\n\n**2.** Please check your phone and enter the code when prompted.\n\n---\n\n**3.** If you don't receive the code within 5 minutes, you can:\n\n[Request new code] [Try email instead]`,
  "I need help with software installation": `**1.** I can help you with software installation. What software do you need to install?\n\n---\n\n**2.** Please provide the name of the software or select from common options:\n\n[Microsoft Office] [Adobe Creative Suite] [Other]`,
  "How do I request access to a new application?": `**1.** I'll help you request access to a new application.\n\n---\n\n**2.** Please provide the name of the application you need access to.\n\n---\n\n**3.** I'll guide you through the approval process once you provide the application name.`
};

const CursorPlayground = () => {
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Add welcome message
    setMessages([{
      text: "Welcome to the AI Workflow Assistant! How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => setLocation("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="rounded-lg border bg-card p-6 h-[calc(100vh-12rem)]">
          <h1 className="text-2xl font-bold mb-4">AI Workflow Assistant</h1>
          <div className="h-[calc(100%-4rem)]">
            <ThemeProvider>
              <ChatInterface
                samplePrompts={samplePrompts}
                responses={responses}
                messages={messages}
                input={input}
                setMessages={setMessages}
                setInput={setInput}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursorPlayground; 