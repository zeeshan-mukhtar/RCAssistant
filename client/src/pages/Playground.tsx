import { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Sidebar from '../components/playground/Sidebar';
import ChatInterface from '../components/playground/ChatInterface';
import { workflowInfoContent, workflowPrompts } from '../config/workflowConfig';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Royal iTech brand colors
const BRAND_COLORS = {
  primary: '#002366', // Royal blue
  secondary: '#7851a9', // Purple
  accent: '#f2c52e', // Gold
  text: {
    primary: '#2a3535',
    secondary: '#64748B'
  },
  background: {
    light: '#f8f9fa',
    white: '#ffffff'
  }
};

export default function Playground() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>('password-reset');
  const [chatStates, setChatStates] = useState<Record<string, { messages: any[]; input: string; isLoading: boolean }>>({});
  const prevWorkflow = useRef(selectedWorkflow);

  // Ensure state exists for the selected workflow
  useEffect(() => {
    setChatStates((prev) => {
      if (!prev[selectedWorkflow]) {
        return { ...prev, [selectedWorkflow]: { messages: [], input: '', isLoading: false } };
      }
      return prev;
    });
  }, [selectedWorkflow]);

  // Reset input and isLoading on workflow change
  useEffect(() => {
    if (prevWorkflow.current !== selectedWorkflow) {
      setChatStates((prev) => ({
        ...prev,
        [selectedWorkflow]: {
          messages: prev[selectedWorkflow]?.messages || [],
          input: '',
          isLoading: false,
        },
      }));
      prevWorkflow.current = selectedWorkflow;
    }
  }, [selectedWorkflow]);

  const setMessages = (messages: any[]) => {
    setChatStates((prev) => ({
      ...prev,
      [selectedWorkflow]: {
        ...prev[selectedWorkflow],
        messages,
      },
    }));
  };

  const setInput = (input: string) => {
    setChatStates((prev) => ({
      ...prev,
      [selectedWorkflow]: {
        ...prev[selectedWorkflow],
        input,
      },
    }));
  };

  const setIsLoading = (isLoading: boolean) => {
    setChatStates((prev) => ({
      ...prev,
      [selectedWorkflow]: {
        ...prev[selectedWorkflow],
        isLoading,
      },
    }));
  };

  const samplePrompts = workflowPrompts[selectedWorkflow]?.prompts || [];
  const responses = workflowPrompts[selectedWorkflow]?.responses || {};
  const chatState = chatStates[selectedWorkflow] || { messages: [], input: '', isLoading: false };

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* Main Content + Footer */}
      <div className="flex-1 flex flex-col pt-[72px] bg-neutral-50 min-h-0">
        <div className="flex flex-1 min-h-0 overflow-hidden mb-8">
          <Sidebar selectedWorkflow={selectedWorkflow} setSelectedWorkflow={setSelectedWorkflow} />
          <Box sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', p: 0, overflow: 'hidden' }}>
            <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, p: 0 }}>
              {/* Workflow info card */}
              <Box sx={{ mb: 0, p: 3 }}>
                <Paper sx={{ p: 3, borderRadius: 2, background: 'linear-gradient(90deg, #f5f7fb 60%, #e8eafd 100%)', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', mb: 0 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center' }}>
                    {workflowInfoContent[selectedWorkflow]?.heading}
                  </Typography>
                  <Typography variant="body1" sx={{ color: BRAND_COLORS.text.secondary, mb: 2 }}>
                    {workflowInfoContent[selectedWorkflow]?.description}
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: 24 }}>
                    {workflowInfoContent[selectedWorkflow]?.bullets.map((item, idx) => (
                      <li key={idx} style={{ color: BRAND_COLORS.text.primary, marginBottom: 4 }}>{item}</li>
                    ))}
                  </ul>
                </Paper>
              </Box>
              {/* Chat area */}
              <Box sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', p: 0, height: 0, overflow: 'auto' }}>
                <ChatInterface
                  samplePrompts={samplePrompts}
                  responses={responses}
                  messages={chatState.messages}
                  input={chatState.input}
                  setMessages={setMessages}
                  setInput={setInput}
                  isLoading={chatState.isLoading}
                  setIsLoading={setIsLoading}
                />
              </Box>
            </Container>
          </Box>
        </div>
        <Footer minimal />
      </div>
    </div>
  );
} 