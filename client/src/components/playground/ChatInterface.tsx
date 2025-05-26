import React, { useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  CircularProgress,
  InputAdornment,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Divider
} from '@mui/material';
import { Send, KeyboardArrowDown, SmartToy, Person } from '@mui/icons-material';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface SamplePrompt {
  text: string;
  highlighted: string;
}

interface ChatInterfaceProps {
  samplePrompts: SamplePrompt[];
  responses: Record<string, string>;
  messages: Message[];
  input: string;
  setMessages: (messages: Message[]) => void;
  setInput: (input: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

// Sample user personas for demo
const userPersonas = [
  { name: 'Alex Johnson', avatar: 'A' },
  { name: 'Priya Patel', avatar: 'P' },
  { name: 'Chris Lee', avatar: 'C' },
];
const assistantPersona = { name: 'RC Agentic AI', avatar: <SmartToy /> };

// Helper to parse steps and actions from assistant response
function parseAssistantResponse(text: string) {
  const stepParts = text.split(/---/g).map(s => s.trim()).filter(Boolean);
  let actions: string[] = [];
  if (stepParts.length > 0) {
    const last = stepParts[stepParts.length - 1];
    const buttonMatches = Array.from(last.matchAll(/\[(.*?)\]/g));
    if (buttonMatches.length > 0) {
      actions = buttonMatches.map(m => m[1]);
      stepParts[stepParts.length - 1] = last.replace(/\[(.*?)\]/g, '').trim();
    }
  }
  return { steps: stepParts, actions };
}

// Helper to reveal steps one by one with delay
function revealNextStep(steps: string[], setDisplayedSteps: React.Dispatch<React.SetStateAction<string[]>>, setIsLoading: (loading: boolean) => void, i: number = 0) {
  setDisplayedSteps(prev => [...prev, steps[i]]);
  i++;
  if (i < steps.length) {
    setTimeout(() => revealNextStep(steps, setDisplayedSteps, setIsLoading, i), 1200);
  } else {
    setIsLoading(false);
  }
}

export default function ChatInterface({ samplePrompts, responses, messages, input, setMessages, setInput, isLoading, setIsLoading }: ChatInterfaceProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = React.useState<number | undefined>(undefined);
  const [pendingSteps, setPendingSteps] = React.useState<string[]>([]);
  const [displayedSteps, setDisplayedSteps] = React.useState<string[]>([]);
  const [pendingActions, setPendingActions] = React.useState<string[]>([]);
  const [pendingMessageIdx, setPendingMessageIdx] = React.useState<number | null>(null);
  const prevMessagesRef = React.useRef<Message[]>(messages);
  const pendingFullBotText = React.useRef<string | null>(null);
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  const userPersona = React.useMemo(() => userPersonas[Math.floor(Math.random() * userPersonas.length)], []);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);
    try {
      const botText = responses[input.trim()] || "I'll help you with your request. What would you like to do?";
      if (botText.includes('**1.**')) {
        pendingFullBotText.current = botText;
        const { steps, actions } = parseAssistantResponse(botText);
        setPendingSteps(steps);
        setPendingActions(actions);
        setDisplayedSteps([]);
        setPendingMessageIdx(messages.length + 1);
        prevMessagesRef.current = [...messages, userMessage, {
          text: '',
          isUser: false,
          timestamp: new Date(),
        }];
        setTimeout(() => revealNextStep(steps, setDisplayedSteps, setIsLoading, 0), 1200);
        setMessages(prevMessagesRef.current);
        return;
      }
      const botResponse: Message = {
        text: botText,
        isUser: false,
        timestamp: new Date(),
      };
      setTimeout(() => {
        setMessages([...messages, userMessage, botResponse]);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error processing message:', error);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (pendingMessageIdx !== null && displayedSteps.length > 0) {
      const newMessages = [...prevMessagesRef.current];
      if (newMessages[pendingMessageIdx]) {
        if (displayedSteps.length === pendingSteps.length && pendingFullBotText.current) {
          newMessages[pendingMessageIdx] = {
            ...newMessages[pendingMessageIdx],
            text: pendingFullBotText.current,
          };
        } else {
          newMessages[pendingMessageIdx] = {
            ...newMessages[pendingMessageIdx],
            text: displayedSteps.join('\n\n---\n\n'),
          };
        }
        setMessages(newMessages);
        prevMessagesRef.current = newMessages;
      }
    }
    if (pendingMessageIdx !== null && displayedSteps.length === pendingSteps.length && pendingSteps.length > 0) {
      setTimeout(() => {
        setPendingSteps([]);
        setDisplayedSteps([]);
        setPendingActions([]);
        setPendingMessageIdx(null);
        pendingFullBotText.current = null;
      }, 100);
    }
  }, [displayedSteps, pendingSteps, pendingMessageIdx, setMessages]);

  const handleActionClick = (action: string) => {
    const userMessage = {
      text: action,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);
    const normalizedAction = action.trim();
    let botText = responses[normalizedAction];
    if (!botText) {
      const foundKey = Object.keys(responses).find(
        k => k.trim().toLowerCase() === normalizedAction.toLowerCase()
      );
      if (foundKey) botText = responses[foundKey];
    }
    if (!botText) {
      botText = `**1.** You selected: ${action}\n\n---\n\n` +
        `**2.** This is a sample fallback response for the action button.\n\n---\n\n` +
        `**3.** Would you like to try another action or return to the main menu?\n\n[Main menu] [Cancel]`;
    }
    if (botText.includes('**1.**')) {
      pendingFullBotText.current = botText;
      const { steps, actions } = parseAssistantResponse(botText);
      setPendingSteps(steps);
      setPendingActions(actions);
      setDisplayedSteps([]);
      setPendingMessageIdx(messages.length + 1);
      prevMessagesRef.current = [...messages, userMessage, {
        text: '',
        isUser: false,
        timestamp: new Date(),
      }];
      setTimeout(() => revealNextStep(steps, setDisplayedSteps, setIsLoading, 0), 1200);
      setMessages(prevMessagesRef.current);
      return;
    }
    const botResponse = {
      text: botText,
      isUser: false,
      timestamp: new Date(),
    };
    setTimeout(() => {
      setMessages([...messages, userMessage, botResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleMenuOpen = () => {
    if (inputRef.current && inputRef.current.parentElement) {
      setAnchorEl(inputRef.current.parentElement);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSamplePromptSelect = (prompt: string) => {
    setInput(prompt);
    handleMenuClose();
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
        }}
      >
        <Box
          ref={chatHistoryRef}
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                gap: 1,
              }}
            >
              {!message.isUser && (
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  {assistantPersona.avatar}
                </Avatar>
              )}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  maxWidth: '70%',
                  bgcolor: message.isUser ? 'primary.main' : 'background.paper',
                  color: message.isUser ? 'primary.contrastText' : 'text.primary',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                  {(() => {
                    // Split message text by [Action] and render as clickable links
                    const parts = [];
                    const regex = /\[(.*?)\]/g;
                    let lastIndex = 0;
                    let match;
                    let key = 0;
                    while ((match = regex.exec(message.text)) !== null) {
                      // Push text before the action
                      if (match.index > lastIndex) {
                        parts.push(message.text.slice(lastIndex, match.index));
                      }
                      // Push the clickable action link
                      const action = match[1];
                      parts.push(
                        <Button
                          key={key++}
                          variant="text"
                          size="small"
                          onClick={() => handleActionClick(action)}
                          sx={{
                            color: 'primary.main',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            minWidth: 0,
                            padding: 0,
                            fontWeight: 500,
                            '&:hover': {
                              background: 'none',
                              color: 'primary.dark',
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          {action}
                        </Button>
                      );
                      lastIndex = regex.lastIndex;
                    }
                    // Push any remaining text after the last action
                    if (lastIndex < message.text.length) {
                      parts.push(message.text.slice(lastIndex));
                    }
                    return parts;
                  })()}
                </Typography>
              </Paper>
              {message.isUser && (
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  {userPersona.avatar}
                </Avatar>
              )}
            </Box>
          ))}
          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1 }}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                {assistantPersona.avatar}
              </Avatar>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <CircularProgress size={20} />
              </Paper>
            </Box>
          )}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleMenuOpen}
                    edge="end"
                  >
                    <KeyboardArrowDown />
                  </IconButton>
                  <IconButton
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    edge="end"
                  >
                    <Send />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputRef={inputRef}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { width: inputWidth },
            }}
          >
            {Array.isArray(samplePrompts) && samplePrompts.map((prompt, index) => (
              <MenuItem
                key={index}
                onClick={() => handleSamplePromptSelect(prompt.text)}
              >
                <Typography>
                  {prompt.text.split(prompt.highlighted).map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <Typography
                          component="span"
                          sx={{ color: 'primary.main', fontWeight: 'bold' }}
                        >
                          {prompt.highlighted}
                        </Typography>
                      )}
                    </React.Fragment>
                  ))}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Paper>
    </Box>
  );
} 