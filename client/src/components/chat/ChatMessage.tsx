import { Message } from "@/lib/chatMessages";
import { motion } from "framer-motion";
import { format } from "date-fns";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";
  
  return (
    <motion.div
      className={`max-w-[85%] ${
        isUser ? "ml-auto" : "mr-auto"
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`rounded-lg px-4 py-3 ${
          isUser
            ? "bg-neutral-100 text-neutral-800 border border-neutral-200"
            : "bg-primary text-white"
        }`}
      >
        <p className="text-sm md:text-base">{message.content}</p>
      </div>
      <div className={`text-xs text-neutral-400 mt-1 ${isUser ? "text-right" : "text-left"}`}>
        {format(new Date(message.timestamp), "h:mm a")}
      </div>
    </motion.div>
  );
}
