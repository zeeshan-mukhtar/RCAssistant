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
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { Send, KeyboardArrowDown, SmartToy, Person, Close, Check } from '@mui/icons-material';

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
  currentWorkflow: string;
}

// Add new interface for editable details
interface EditableDetails {
  isEditing: boolean;
  details: string;
  originalMessage: Message | null;
}

// Sample user personas for demo
const userPersonas = [
  { name: 'Alex Johnson', avatar: 'A' },
  { name: 'Priya Patel', avatar: 'P' },
  { name: 'Chris Lee', avatar: 'C' },
];
const assistantPersona = { name: 'RC Agentic AI', avatar: 'R' };

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

// Workflow field sequences for each workflow
const workflowFieldSequences: Record<string, string[]> = {
  'password-reset': ['application', 'email'],
  'group-management': ['user email', 'group name', 'role', 'access expiration'],
  'leave-request': ['leave type', 'dates', 'reason'],
  'travel-request': ['destination', 'dates', 'purpose', 'requirements'],
};

// Helper to get the next field in the sequence
function getNextField(workflow: string, currentField: string | null, userDetails: Record<string, string>) {
  const fields = workflowFieldSequences[workflow] || [];
  if (!currentField) return fields[0];
  const idx = fields.indexOf(currentField);
  for (let i = idx + 1; i < fields.length; i++) {
    // Only prompt for fields not already filled (for edit scenarios)
    if (!userDetails[fields[i]]) return fields[i];
  }
  return null;
}

// Helper to get the label for a field
function getFieldLabel(field: string) {
  // Capitalize and prettify
  if (!field) return '';
  return field
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// Mapping for workflow actions to field, label, and prompt
const workflowActionPrompts: Record<string, Record<string, { field: string, label: string, prompt: string }>> = {
  'group-management': {
    'Add user to group': { field: 'user email', label: 'User Email', prompt: 'Enter the user\'s email address' },
    'Enter Group Name': { field: 'group name', label: 'Group Name', prompt: 'Enter the group name' },
    'Enter Role': { field: 'role', label: 'Role', prompt: 'Enter the user\'s role (optional)' },
    'Enter Access Expiration': { field: 'access expiration', label: 'Access Expiration', prompt: 'Enter access expiration date (optional)' },
  },
  'leave-request': {
    'Enter Leave Type': { field: 'leave type', label: 'Leave Type', prompt: 'What type of leave would you like to request?' },
    'Enter Dates': { field: 'dates', label: 'Dates', prompt: 'Enter the date(s) for your leave' },
    'Enter Reason': { field: 'reason', label: 'Reason', prompt: 'Enter the reason for your leave (optional)' },
  },
  'travel-request': {
    'Enter Destination': { field: 'destination', label: 'Destination', prompt: 'Where are you traveling to?' },
    'Enter Dates': { field: 'dates', label: 'Dates', prompt: 'Enter your travel dates' },
    'Enter Purpose': { field: 'purpose', label: 'Purpose', prompt: 'What is the purpose of your trip?' },
    'Enter Requirements': { field: 'requirements', label: 'Special Requirements', prompt: 'Any special requirements? (optional)' },
  },
};

// Update: Always use the mapping for label and prompt for each field in modal
function getFieldPrompt(workflow: string, field: string): { label: string, prompt: string } {
  const mapping = workflowActionPrompts[workflow];
  if (!mapping) return { label: getFieldLabel(field), prompt: '' };
  // Try to find by action name (for initial action), then by field
  for (const key in mapping) {
    if (mapping[key].field === field) {
      return { label: mapping[key].label, prompt: mapping[key].prompt };
    }
  }
  return { label: getFieldLabel(field), prompt: '' };
}

export default function ChatInterface({ samplePrompts, responses, messages, input, setMessages, setInput, isLoading, setIsLoading, currentWorkflow }: ChatInterfaceProps) {
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
  const [editableDetails, setEditableDetails] = React.useState<EditableDetails>({
    isEditing: false,
    details: '',
    originalMessage: null
  });
  const [userDetails, setUserDetails] = React.useState<Record<string, string>>({});
  const [pendingField, setPendingField] = React.useState<string | null>(null);
  const [pendingAction, setPendingAction] = React.useState<string | null>(null);
  const [pendingNextKey, setPendingNextKey] = React.useState<string | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalField, setModalField] = React.useState<string | null>(null);
  const [modalLabel, setModalLabel] = React.useState<string>('');
  const [modalValue, setModalValue] = React.useState<string>('');
  const [modalPrompt, setModalPrompt] = React.useState<string>('');

  const userPersona = React.useMemo(() => userPersonas[Math.floor(Math.random() * userPersonas.length)], []);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Add function to handle edit mode
  const handleEditClick = (message: Message) => {
    // Extract details from the message text
    const detailsMatch = message.text.match(/To.*?details:\n\n([\s\S]*?)\n\n👉/);
    if (detailsMatch) {
      setEditableDetails({
        isEditing: true,
        details: detailsMatch[1],
        originalMessage: message
      });
      setInput(detailsMatch[1]);
    }
  };

  // Utility to fill placeholders
  function fillPlaceholders(template: string, details: Record<string, string>) {
    // Replace {field or 'N/A'} or {field or "N/A"} with value or N/A
    return template.replace(/\{([^}]+)\}/g, (_, key) => {
      // Handle optional fields like {role or 'N/A'} or {access expiration or 'N/A'}
      const match = key.match(/^([\w\s]+) or ['\"]N\/A['\"]$/);
      if (match) {
        const field = match[1].trim();
        return details[field] && details[field].trim() ? details[field] : 'N/A';
      }
      // Default: just use the value or keep the placeholder
      return details[key] || `{${key}}`;
    });
  }

  // Modified handleSend for password-reset workflow
  const handleSend = async () => {
    if (!input.trim()) return;

    // Only use chat input for non-modal flows
    if (currentWorkflow === 'password-reset' && (pendingField || modalOpen)) {
      return;
    }

    // Default: send user message and process as before
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

  // Add effect to reset modal state when workflow changes
  React.useEffect(() => {
    setModalOpen(false);
    setModalField(null);
    setModalLabel('');
    setModalPrompt('');
    setModalValue('');
    setUserDetails({});
  }, [currentWorkflow]);

  // Modified handleActionClick for all workflows
  const handleActionClick = (action: string) => {
    if (['password-reset', 'group-management', 'leave-request', 'travel-request'].includes(currentWorkflow)) {
      // For 'Enter Details' and similar, start the field sequence for the workflow
      if (
        action === 'Enter Details' ||
        action === 'Edit details' ||
        action === 'Edit Details' ||
        action === 'Add Another User' ||
        action === 'Request another leave' ||
        action === 'Book another trip'
      ) {
        const fields = workflowFieldSequences[currentWorkflow] || [];
        const clearedDetails = { ...userDetails };
        fields.forEach(f => delete clearedDetails[f]);
        setUserDetails(clearedDetails);
        const firstField = fields[0];
        const { label, prompt } = getFieldPrompt(currentWorkflow, firstField);
        setModalField(firstField);
        setModalLabel(label);
        setModalPrompt(prompt);
        setModalValue('');
        setModalOpen(true);
        setPendingNextKey('modal-sequence');
        return;
      }
      // Contextual modal for mapped actions
      if (workflowActionPrompts[currentWorkflow] && workflowActionPrompts[currentWorkflow][action]) {
        const { field } = workflowActionPrompts[currentWorkflow][action];
        const { label, prompt } = getFieldPrompt(currentWorkflow, field);
        setModalField(field);
        setModalLabel(label);
        setModalPrompt(prompt);
        setModalValue('');
        setModalOpen(true);
        setPendingNextKey('modal-sequence');
        return;
      }
      // If user clicks to edit a specific field, open modal for that field
      if (action.startsWith('Enter ')) {
        const field = action.replace('Enter ', '').toLowerCase();
        const { label, prompt } = getFieldPrompt(currentWorkflow, field);
        setModalField(field);
        setModalLabel(label);
        setModalPrompt(prompt);
        setModalValue('');
        setModalOpen(true);
        setPendingNextKey('modal-sequence');
        return;
      }
      // Otherwise, fill placeholders and display the message
      let nextResponse = responses[action];
      if (nextResponse) {
        nextResponse = fillPlaceholders(nextResponse, userDetails);
        setMessages([...messages, { text: nextResponse, isUser: false, timestamp: new Date() }]);
        return;
      }
    }
    // Default: previous logic
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

  // Modal submit handler for all workflows
  function handleModalSubmit() {
    if (!modalField || !modalValue.trim()) return;
    let updatedDetails = { ...userDetails, [modalField]: modalValue.trim() };
    if (currentWorkflow === 'password-reset' && modalField === 'email') {
      updatedDetails['user email'] = modalValue.trim();
    }
    setUserDetails(updatedDetails);
    setModalOpen(false);
    setModalField(null);
    setModalLabel('');
    setModalPrompt('');
    setModalValue('');
    if ([
      'password-reset',
      'group-management',
      'leave-request',
      'travel-request',
    ].includes(currentWorkflow)) {
      // Sequentially prompt for next field in the workflow's sequence
      const fields = workflowFieldSequences[currentWorkflow] || [];
      const idx = fields.indexOf(modalField);
      const nextField = fields[idx + 1];
      if (nextField) {
        setTimeout(() => {
          const { label, prompt } = getFieldPrompt(currentWorkflow, nextField);
          setModalField(nextField);
          setModalLabel(label);
          setModalPrompt(prompt);
          setModalValue('');
          setModalOpen(true);
          setPendingNextKey('modal-sequence');
        }, 200);
        return;
      }
      // Show confirmation step for each workflow and ensure modal is closed
      let confirmationKey = '';
      if (currentWorkflow === 'password-reset') confirmationKey = 'Enter Email';
      if (currentWorkflow === 'group-management') confirmationKey = 'Enter Details';
      if (currentWorkflow === 'leave-request') confirmationKey = 'Enter Details';
      if (currentWorkflow === 'travel-request') confirmationKey = 'Enter Details';
      let confirmation = responses[confirmationKey];
      if (confirmation) {
        confirmation = fillPlaceholders(confirmation, updatedDetails);
        setMessages([...messages, { text: confirmation, isUser: false, timestamp: new Date() }]);
      }
      setPendingNextKey(null);
      setModalOpen(false); // Ensure modal is closed
      return;
    }
  }

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

  // Add function to cancel editing
  const handleCancelEdit = () => {
    setEditableDetails({ isEditing: false, details: '', originalMessage: null });
    setInput('');
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
                      if (action === 'Edit Details') {
                        parts.push(
                          <Button
                            key={key++}
                            variant="text"
                            size="small"
                            onClick={() => handleEditClick(message)}
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
                      } else {
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
                      }
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
            placeholder={editableDetails.isEditing ? "Edit the details..." : "Type your message..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {editableDetails.isEditing ? (
                    <>
                      <IconButton
                        onClick={handleCancelEdit}
                        edge="end"
                        color="error"
                        size="small"
                      >
                        <Close />
                      </IconButton>
                      <IconButton
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        edge="end"
                        color="primary"
                        size="small"
                      >
                        <Check />
                      </IconButton>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
      {/* Modal for user input in password-reset workflow */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>{modalLabel}</DialogTitle>
        <DialogContent>
          {modalPrompt && <Typography variant="body2" sx={{ mb: 1 }}>{modalPrompt}</Typography>}
          <TextField
            autoFocus
            margin="dense"
            label={modalLabel}
            type="text"
            fullWidth
            value={modalValue}
            onChange={e => setModalValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') handleModalSubmit();
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button onClick={handleModalSubmit} disabled={!modalValue.trim()}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 