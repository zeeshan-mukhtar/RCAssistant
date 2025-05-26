// Example chat conversation flow for demo
export type Message = {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

export const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'assistant',
    content: 'Hello! I\'m AIagentBot. How can I help you today?',
    timestamp: new Date(Date.now() - 60000 * 5)
  }
];

export const messageFlows: Record<string, Message[]> = {
  passwordReset: [
    {
      id: 'flow1-1',
      sender: 'user',
      content: 'I need to reset my password for the accounting system.',
      timestamp: new Date()
    },
    {
      id: 'flow1-2',
      sender: 'assistant',
      content: 'I can help you with that! I\'ll send a password reset link to your email. Would you like me to do that now?',
      timestamp: new Date()
    },
    {
      id: 'flow1-3',
      sender: 'user',
      content: 'Yes, please.',
      timestamp: new Date()
    },
    {
      id: 'flow1-4',
      sender: 'assistant',
      content: 'Great! I\'ve sent a password reset link to your email. You should receive it within the next minute. Is there anything else you need help with?',
      timestamp: new Date()
    },
    {
      id: 'flow1-5',
      sender: 'user',
      content: 'That\'s all, thank you!',
      timestamp: new Date()
    },
    {
      id: 'flow1-6',
      sender: 'assistant',
      content: 'You\'re welcome! Feel free to reach out if you need anything else. Have a great day!',
      timestamp: new Date()
    }
  ],
  softwareInstallation: [
    {
      id: 'flow2-1',
      sender: 'user',
      content: 'How do I install the new project management software?',
      timestamp: new Date()
    },
    {
      id: 'flow2-2',
      sender: 'assistant',
      content: 'I can help you install the project management software! I\'ll check if you have access and initiate the installation process. This should take about 5 minutes.',
      timestamp: new Date()
    },
    {
      id: 'flow2-3',
      sender: 'user',
      content: 'Sounds good.',
      timestamp: new Date()
    },
    {
      id: 'flow2-4',
      sender: 'assistant',
      content: 'I\'ve started the installation process. You\'ll see an icon on your desktop once it\'s complete. Would you like me to schedule a quick training session as well?',
      timestamp: new Date()
    }
  ],
  policyQuestion: [
    {
      id: 'flow3-1',
      sender: 'user',
      content: 'What\'s our policy on remote work?',
      timestamp: new Date()
    },
    {
      id: 'flow3-2',
      sender: 'assistant',
      content: 'According to our current remote work policy, employees can work remotely up to 3 days per week with manager approval. You should coordinate with your team to ensure proper coverage in the office. Would you like me to send you the full policy document?',
      timestamp: new Date()
    }
  ]
};

// Preset questions for the demo
export const presetQuestions = [
  "I need to reset my password for the accounting system.",
  "How do I install the new project management software?",
  "What's our policy on remote work?",
  "Can you help me troubleshoot my VPN connection?"
];
