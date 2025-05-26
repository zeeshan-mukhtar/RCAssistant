import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChatMessage from './ChatMessage';
import { workflowPrompts } from '../config/workflowConfig';

interface ChatInterfaceProps {
  workflowId: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ workflowId }) => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const workflow = workflowPrompts[workflowId];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { text: inputValue, isUser: true };
      setMessages(prev => [...prev, newMessage]);

      // Find the matching prompt and its response
      const prompt = workflow.prompts.find(p => 
        p.text.toLowerCase().includes(inputValue.toLowerCase())
      );

      if (prompt) {
        const response = workflow.responses[prompt.text];
        if (response) {
          setTimeout(() => {
            setMessages(prev => [...prev, { text: response, isUser: false }]);
          }, 500);
        }
      }

      setInputValue('');
    }
  };

  const handleActionClick = (action: string) => {
    // Add the action as a user message
    setMessages(prev => [...prev, { text: action, isUser: true }]);

    // Find the response for the action
    const response = workflow.responses[action];
    if (response) {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: response, isUser: false }]);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
            onActionClick={handleActionClick}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-4">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={1}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface; 