// Workflow information content
export const workflowInfoContent: Record<string, { heading: string; description: string; bullets: string[] }> = {
  'password-reset': {
    heading: '🔐 Try it yourself!',
    description: "Need to reset your password? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Reset your Azure AD password',
      'Change your password',
      'Get help with password issues',
    ],
  },
  'unlock-account': {
    heading: '🔓 Try it yourself!',
    description: "Account locked? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Unlock your Azure AD account',
      'Get help with account access',
      'Reset security questions',
    ],
  },
  'request-software': {
    heading: '💻 Try it yourself!',
    description: "Need new software? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Request software installation',
      'Check software availability',
      'Get license information',
    ],
  },
  'group-management': {
    heading: '👥 Try it yourself!',
    description: "Need to manage groups? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'View group memberships',
      'Request group access',
      'Manage group permissions',
    ],
  },
  'user-provisioning': {
    heading: '👤 Try it yourself!',
    description: "Need to manage users? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Create new user accounts',
      'Modify user permissions',
      'Deactivate user accounts',
    ],
  },
  'app-registration': {
    heading: '📱 Try it yourself!',
    description: "Need to register an app? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Register new applications',
      'Configure app permissions',
      'Manage app settings',
    ],
  },
  'audit-logs': {
    heading: '📊 Try it yourself!',
    description: "Need to review Azure AD activity? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'View and filter audit logs',
      'Export logs for analysis',
    ],
  },
  'help-support': {
    heading: '❓ Try it yourself!',
    description: "Looking for help or documentation? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Contact support or IT helpdesk',
      'Access Azure AD documentation',
    ],
  },
  'leave-request': {
    heading: '🗓️ Try it yourself!',
    description: "Imagine you need to take a day off. Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Submit a leave request',
      'Check your leave balance',
      'Track approval status',
    ],
  },
  'payslip-download': {
    heading: '💵 Try it yourself!',
    description: "Suppose you want to access your latest payslip. Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Download your latest payslip',
      'View payslip history',
      'Get help understanding your payslip',
    ],
  },
  'update-personal-info': {
    heading: '📝 Try it yourself!',
    description: "Need to update your contact details? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Update address, phone, or emergency contact',
      'Change bank account details',
      'Review your personal information',
    ],
  },
  'hr-helpdesk': {
    heading: '🙋 Try it yourself!',
    description: "Have an HR question or issue? Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Contact HR support',
      'Submit an HR query or ticket',
      'Browse HR FAQs and policies',
    ],
  },
  'resource-onboarding': {
    heading: '🚀 Try it yourself!',
    description: "Suppose you need to onboard a new employee or contractor. Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Initiate onboarding for a new resource',
      'Track onboarding progress and tasks',
      'Get a checklist of required documents',
      'Send welcome emails and assign a buddy',
    ],
  },
  'travel-request': {
    heading: '✈️ Try it yourself!',
    description: "Need to raise a travel request? Here's what you can do with AI Playground:",
    bullets: [
      'Raise a travel request via Zoho People',
      'AI validates completeness and requests missing documents',
      'AI checks available flight options and highlights best fares',
    ],
  },
  'visa-processing': {
    heading: '🛂 Try it yourself!',
    description: "Need help with visa processing? Here's what you can do:",
    bullets: [
      'AI validates checklist for visa initiation',
      'Notifies employee if incomplete',
      'Initiates visa process if required',
    ],
  },
  'travel-booking': {
    heading: '🏨 Try it yourself!',
    description: "Want to book flights, hotels, or cars? Here's what you can do:",
    bullets: [
      'AI fetches and highlights best flight/hotel/car options',
      'Shares compiled itinerary with employee',
      'Checks out bookings via payment gateway',
    ],
  },
  'travel-approval': {
    heading: '✅ Try it yourself!',
    description: "Need travel approval? Here's what you can do:",
    bullets: [
      'AI triggers L1/L2 manager approval with real-time fare details',
      'Auto-approves if not received in 3 hours',
      'Shares final itinerary and confirmation',
    ],
  },
  'travel-expenses': {
    heading: '💳 Try it yourself!',
    description: "Want to log or review travel expenses? Here's what you can do:",
    bullets: [
      'Logs all final expenses in travel request form',
      'Pays for bookings using credit card',
      'View and export travel expense reports',
    ],
  },
};

// Workflow-specific sample prompts and AI-style responses
export const workflowPrompts: Record<string, { prompts: { text: string; highlighted: string }[]; responses: Record<string, string> }> = {
  'password-reset': {
    prompts: [
      { text: "How do I reset my Azure AD password?", highlighted: "reset my Azure AD password" },
      { text: "My password expired, what should I do?", highlighted: "password expired" },
      { text: "How do I change my password?", highlighted: "change my password" },
    ],
    responses: {
      "How do I reset my Azure AD password?":
        "**1.** I see you want to reset your Azure AD password. Let me check your account status and prepare the reset process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for a password reset. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm your username and whether you have access to your recovery email or phone. Once confirmed, I'll send you a password reset link.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Application:** Azure AD\n" +
        "- **Reset Portal:** https://portal.example.com/password-reset\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Send reset link] [Edit details] [Cancel]",
      "My password expired, what should I do?":
        "**1.** Your password has expired. I'll check your account and guide you through the reset process...\n\n---\n\n" +
        "**2.** Resetting an expired password requires identity verification. This ensures only you can update your credentials.\n\n---\n\n" +
        "**3.** Please confirm your username and recovery contact. I'll send a reset link once confirmed.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Application:** Azure AD\n" +
        "- **Reset Portal:** https://portal.example.com/password-reset\n\n" +
        "[Send reset link] [Edit details] [Cancel]",
      "How do I change my password?":
        "**1.** You'd like to change your password. Let me check your current status and available options...\n\n---\n\n" +
        "**2.** Changing your password regularly helps keep your account secure. I'll guide you through the process for your device or platform.\n\n---\n\n" +
        "**3.** Would you like to change your password via the Azure portal, Windows device, or another method?\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Portal:** https://portal.example.com/account\n\n" +
        "[Change via Azure portal] [Change on Windows] [Other method] [Cancel]",
    }
  },
  'unlock-account': {
    prompts: [
      { text: "How do I unlock my account?", highlighted: "unlock my account" },
      { text: "I forgot my password, what should I do?", highlighted: "forgot password" },
      { text: "How do I reset my security questions?", highlighted: "reset security questions" },
    ],
    responses: {
      "How do I unlock my account?":
        "**1.** I see you want to unlock your account. Let me check your account status and prepare the unlock process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for an unlock. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm your username and whether you have access to your recovery email or phone. Once confirmed, I'll send you a unlock link.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Application:** Azure AD\n" +
        "- **Unlock Portal:** https://portal.example.com/unlock-account\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Unlock account] [Edit details] [Cancel]",
      "I forgot my password, what should I do?":
        "**1.** Your password has expired. I'll check your account and guide you through the reset process...\n\n---\n\n" +
        "**2.** Resetting an expired password requires identity verification. This ensures only you can update your credentials.\n\n---\n\n" +
        "**3.** Please confirm your username and recovery contact. I'll send a reset link once confirmed.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Application:** Azure AD\n" +
        "- **Reset Portal:** https://portal.example.com/password-reset\n\n" +
        "[Send reset link] [Edit details] [Cancel]",
      "How do I reset my security questions?":
        "**1.** You'd like to reset your security questions. Let me check your current status and available options...\n\n---\n\n" +
        "**2.** Resetting security questions requires identity verification. This ensures only you can update your security questions.\n\n---\n\n" +
        "**3.** Please confirm your username and recovery contact. I'll send a reset link once confirmed.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Application:** Azure AD\n" +
        "- **Reset Portal:** https://portal.example.com/reset-security-questions\n\n" +
        "[Send reset link] [Edit details] [Cancel]",
    }
  },
  'request-software': {
    prompts: [
      { text: "How do I request new software?", highlighted: "request new software" },
      { text: "I need a new software, what should I do?", highlighted: "need new software" },
      { text: "How do I check software availability?", highlighted: "check software availability" },
    ],
    responses: {
      "How do I request new software?":
        "**1.** I see you want to request new software. Let me check your account status and prepare the request process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for software request. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the software you need and provide the necessary details. Once confirmed, I'll send your request to the IT department.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Software:** Microsoft Office\n" +
        "- **Request Portal:** https://portal.example.com/software-request\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Send request] [Edit details] [Cancel]",
      "I need a new software, what should I do?":
        "**1.** You need a new software. Let me check your account status and prepare the request process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for software request. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the software you need and provide the necessary details. Once confirmed, I'll send your request to the IT department.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Software:** Microsoft Office\n" +
        "- **Request Portal:** https://portal.example.com/software-request\n\n" +
        "[Send request] [Edit details] [Cancel]",
      "How do I check software availability?":
        "**1.** You want to check software availability. Let me check the available options...\n\n---\n\n" +
        "**2.** I'll guide you through the process to check software availability.\n\n---\n\n" +
        "**3.** Would you like me to check software availability for you?",
    }
  },
  'group-management': {
    prompts: [
      { text: "How do I view my group memberships?", highlighted: "view my group memberships" },
      { text: "I need to view my group memberships, what should I do?", highlighted: "need to view group memberships" },
      { text: "How do I manage group permissions?", highlighted: "manage group permissions" },
    ],
    responses: {
      "How do I view my group memberships?":
        "**1.** I see you want to view your group memberships. Let me check your group memberships...\n\n---\n\n" +
        "**2.** I'll guide you through the process to view your group memberships.\n\n---\n\n" +
        "**3.** Would you like me to view your group memberships for you?",
      "I need to view my group memberships, what should I do?":
        "**1.** You need to view your group memberships. Let me check your group memberships...\n\n---\n\n" +
        "**2.** I'll guide you through the process to view your group memberships.\n\n---\n\n" +
        "**3.** Would you like me to view your group memberships for you?",
      "How do I manage group permissions?":
        "**1.** You want to manage group permissions. Let me guide you through the process...\n\n---\n\n" +
        "**2.** Managing group permissions helps ensure the security and efficiency of your group.\n\n---\n\n" +
        "**3.** Would you like me to guide you through managing group permissions?",
    }
  },
  'user-provisioning': {
    prompts: [
      { text: "How do I create a new user account?", highlighted: "create a new user account" },
      { text: "I need to create a new user account, what should I do?", highlighted: "need to create new user account" },
      { text: "How do I modify user permissions?", highlighted: "modify user permissions" },
    ],
    responses: {
      "How do I create a new user account?":
        "**1.** I see you want to create a new user account. Let me check your account status and prepare the account creation process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for user creation. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the user's full name, work email address, department, and role. Once confirmed, I'll create the user account.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Department:** IT\n" +
        "- **Role:** System Administrator\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Create user account] [Edit details] [Cancel]",
      "I need to create a new user account, what should I do?":
        "**1.** You need to create a new user account. Let me check your account status and prepare the account creation process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for user creation. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the user's full name, work email address, department, and role. Once confirmed, I'll create the user account.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Department:** IT\n" +
        "- **Role:** System Administrator\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Create user account] [Edit details] [Cancel]",
      "How do I modify user permissions?":
        "**1.** You want to modify user permissions. Let me guide you through the process...\n\n---\n\n" +
        "**2.** Modifying user permissions helps ensure the security and efficiency of your user management.\n\n---\n\n" +
        "**3.** Would you like me to guide you through modifying user permissions?",
    }
  },
  'app-registration': {
    prompts: [
      { text: "How do I register a new app?", highlighted: "register a new app" },
      { text: "I need to register a new app, what should I do?", highlighted: "need to register new app" },
      { text: "How do I configure app permissions?", highlighted: "configure app permissions" },
    ],
    responses: {
      "How do I register a new app?":
        "**1.** I see you want to register a new app. Let me check your account status and prepare the app registration process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for app registration. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the app name, description, and required permissions. Once confirmed, I'll send your app registration request to the IT department.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **App Name:** RC Agentic AI Playground\n" +
        "- **Description:** A platform for testing and learning about AI\n" +
        "- **Permissions:** Full access to all features and data\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Register app] [Edit details] [Cancel]",
      "I need to register a new app, what should I do?":
        "**1.** You need to register a new app. Let me check your account status and prepare the app registration process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for app registration. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the app name, description, and required permissions. Once confirmed, I'll send your app registration request to the IT department.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **App Name:** RC Agentic AI Playground\n" +
        "- **Description:** A platform for testing and learning about AI\n" +
        "- **Permissions:** Full access to all features and data\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Register app] [Edit details] [Cancel]",
      "How do I configure app permissions?":
        "**1.** You want to configure app permissions. Let me guide you through the process...\n\n---\n\n" +
        "**2.** Configuring app permissions helps ensure the security and efficiency of your app management.\n\n---\n\n" +
        "**3.** Would you like me to guide you through configuring app permissions?",
    }
  },
  'audit-logs': {
    prompts: [
      { text: "How do I view audit logs?", highlighted: "view audit logs" },
      { text: "I need to view audit logs, what should I do?", highlighted: "need to view audit logs" },
      { text: "How do I filter audit logs?", highlighted: "filter audit logs" },
    ],
    responses: {
      "How do I view audit logs?":
        "**1.** I see you want to view audit logs. Let me check your audit logs...\n\n---\n\n" +
        "**2.** I'll guide you through the process to view audit logs.\n\n---\n\n" +
        "**3.** Would you like me to view your audit logs for you?",
      "I need to view audit logs, what should I do?":
        "**1.** You need to view audit logs. Let me check your audit logs...\n\n---\n\n" +
        "**2.** I'll guide you through the process to view audit logs.\n\n---\n\n" +
        "**3.** Would you like me to view your audit logs for you?",
      "How do I filter audit logs?":
        "**1.** You want to filter audit logs. Let me guide you through the process...\n\n---\n\n" +
        "**2.** Filtering audit logs helps ensure the security and efficiency of your audit management.\n\n---\n\n" +
        "**3.** Would you like me to guide you through filtering audit logs?",
    }
  },
  'help-support': {
    prompts: [
      { text: "How do I contact support?", highlighted: "contact support" },
      { text: "I need help, what should I do?", highlighted: "need help" },
      { text: "How do I access Azure AD documentation?", highlighted: "access Azure AD documentation" },
    ],
    responses: {
      "How do I contact support?":
        "**1.** I see you need help. Let me check your account status and prepare the support request process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for support. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the nature of your issue and provide the necessary details. Once confirmed, I'll send your support request to the IT helpdesk.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Issue:** Unable to reset password\n" +
        "- **Details:** Azure AD password reset process not completing\n\n" +
        "�� **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Send support request] [Edit details] [Cancel]",
      "I need help, what should I do?":
        "**1.** You need help. Let me check your account status and prepare the support request process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for support. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the nature of your issue and provide the necessary details. Once confirmed, I'll send your support request to the IT helpdesk.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Issue:** Unable to reset password\n" +
        "- **Details:** Azure AD password reset process not completing\n\n" +
        "[Send support request] [Edit details] [Cancel]",
      "How do I access Azure AD documentation?":
        "**1.** You want to access Azure AD documentation. Let me guide you through the process...\n\n---\n\n" +
        "**2.** I'll guide you through the process to access Azure AD documentation.\n\n---\n\n" +
        "**3.** Would you like me to guide you through accessing Azure AD documentation?",
    }
  },
  'leave-request': {
    prompts: [
      { text: "I need to take a day off next week", highlighted: "take a day off next week" },
      { text: "I need to request a day off, what should I do?", highlighted: "need to request day off" },
      { text: "How do I check my leave balance?", highlighted: "check leave balance" },
    ],
    responses: {
      "I need to take a day off next week":
        "**1.** You need to take a day off next week. Let me check your leave balance and guide you through the request process...\n\n---\n\n" +
        "**2.** Taking a day off helps ensure your well-being and productivity.\n\n---\n\n" +
        "**3.** Please confirm the date(s) of leave, type of leave (sick, annual, etc.), and reason for leave. I'll then guide you through the submission process.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Date(s) of leave:** 2024-03-15\n" +
        "- **Type of leave:** Sick\n" +
        "- **Reason for leave:** Medical appointment\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Submit leave request] [Edit details] [Cancel]",
      "I need to request a day off, what should I do?":
        "**1.** You need to request a day off. Let me check your leave balance and guide you through the request process...\n\n---\n\n" +
        "**2.** Taking a day off helps ensure your well-being and productivity.\n\n---\n\n" +
        "**3.** Please confirm the date(s) of leave, type of leave (sick, annual, etc.), and reason for leave. I'll then guide you through the submission process.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Date(s) of leave:** 2024-03-15\n" +
        "- **Type of leave:** Sick\n" +
        "- **Reason for leave:** Medical appointment\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Submit leave request] [Edit details] [Cancel]",
      "How do I check my leave balance?":
        "**1.** You want to check your leave balance. Let me check your leave balance...\n\n---\n\n" +
        "**2.** I'll guide you through the process to check your leave balance.\n\n---\n\n" +
        "**3.** Would you like me to guide you through checking your leave balance?",
    }
  },
  'payslip-download': {
    prompts: [
      { text: "How do I download my payslip?", highlighted: "download my payslip" },
      { text: "I need to download my payslip, what should I do?", highlighted: "need to download payslip" },
      { text: "How do I view payslip history?", highlighted: "view payslip history" },
    ],
    responses: {
      "How do I download my payslip?":
        "**1.** I see you want to download your payslip. Let me check your payslip portal and guide you through the download process...\n\n---\n\n" +
        "**2.** I'll guide you through the process to download your payslip.\n\n---\n\n" +
        "**3.** Would you like me to guide you through downloading your payslip?",
      "I need to download my payslip, what should I do?":
        "**1.** You need to download your payslip. Let me check your payslip portal and guide you through the download process...\n\n---\n\n" +
        "**2.** I'll guide you through the process to download your payslip.\n\n---\n\n" +
        "**3.** Would you like me to guide you through downloading your payslip?",
      "How do I view payslip history?":
        "**1.** You want to view your payslip history. Let me check your payslip history...\n\n---\n\n" +
        "**2.** I'll guide you through the process to view your payslip history.\n\n---\n\n" +
        "**3.** Would you like me to guide you through viewing your payslip history?",
    }
  },
  'update-personal-info': {
    prompts: [
      { text: "How do I update my contact details?", highlighted: "update my contact details" },
      { text: "I need to update my contact details, what should I do?", highlighted: "need to update contact details" },
      { text: "How do I review my personal information?", highlighted: "review my personal information" },
    ],
    responses: {
      "How do I update my contact details?":
        "**1.** I see you want to update your contact details. Let me check your personal information portal and guide you through the update process...\n\n---\n\n" +
        "**2.** Updating your contact details helps ensure the accuracy and security of your information.\n\n---\n\n" +
        "**3.** Please confirm the new address, phone, or emergency contact. I'll then update your contact details.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **New Address:** 123 Main St, Anytown, USA\n" +
        "- **New Phone:** 555-1234\n" +
        "- **New Emergency Contact:** Jane Doe (jane.doe@example.com)\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Update contact details] [Edit details] [Cancel]",
      "I need to update my contact details, what should I do?":
        "**1.** You need to update your contact details. Let me check your personal information portal and guide you through the update process...\n\n---\n\n" +
        "**2.** Updating your contact details helps ensure the accuracy and security of your information.\n\n---\n\n" +
        "**3.** Please confirm the new address, phone, or emergency contact. I'll then update your contact details.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **New Address:** 123 Main St, Anytown, USA\n" +
        "- **New Phone:** 555-1234\n" +
        "- **New Emergency Contact:** Jane Doe (jane.doe@example.com)\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Update contact details] [Edit details] [Cancel]",
      "How do I review my personal information?":
        "**1.** You want to review your personal information. Let me guide you through the process...\n\n---\n\n" +
        "**2.** Reviewing your personal information helps ensure the accuracy and security of your information.\n\n---\n\n" +
        "**3.** Would you like me to guide you through reviewing your personal information?",
    }
  },
  'hr-helpdesk': {
    prompts: [
      { text: "How do I contact HR support?", highlighted: "contact HR support" },
      { text: "I need HR help, what should I do?", highlighted: "need HR help" },
      { text: "How do I browse HR FAQs and policies?", highlighted: "browse HR FAQs and policies" },
    ],
    responses: {
      "How do I contact HR support?":
        "**1.** I see you need HR help. Let me check your HR support portal and guide you through the contact process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for HR support. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the nature of your HR issue and provide the necessary details. Once confirmed, I'll send your HR support request to the HR department.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Issue:** Need help with HR query\n" +
        "- **Details:** I need guidance on HR policies and procedures\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Send HR support request] [Edit details] [Cancel]",
      "I need HR help, what should I do?":
        "**1.** You need HR help. Let me check your HR support portal and guide you through the contact process...\n\n---\n\n" +
        "**2.** For security, I need to confirm your identity and ensure your account is eligible for HR support. This helps protect your information.\n\n---\n\n" +
        "**3.** Please confirm the nature of your HR issue and provide the necessary details. Once confirmed, I'll send your HR support request to the HR department.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Issue:** Need help with HR query\n" +
        "- **Details:** I need guidance on HR policies and procedures\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Send HR support request] [Edit details] [Cancel]",
      "How do I browse HR FAQs and policies?":
        "**1.** You want to browse HR FAQs and policies. Let me guide you through the process...\n\n---\n\n" +
        "**2.** I'll guide you through the process to browse HR FAQs and policies.\n\n---\n\n" +
        "**3.** Would you like me to guide you through browsing HR FAQs and policies?",
    }
  },
  'resource-onboarding': {
    prompts: [
      { text: "How do I initiate onboarding?", highlighted: "initiate onboarding" },
      { text: "I need to initiate onboarding, what should I do?", highlighted: "need to initiate onboarding" },
      { text: "How do I track onboarding progress and tasks?", highlighted: "track onboarding progress and tasks" },
    ],
    responses: {
      "How do I initiate onboarding?":
        "**1.** I see you want to initiate onboarding. Let me check your onboarding portal and guide you through the initiation process...\n\n---\n\n" +
        "**2.** Initiating onboarding helps ensure a smooth transition and integration into your new role or team.\n\n---\n\n" +
        "**3.** Please confirm the necessary details for onboarding. Once confirmed, I'll initiate your onboarding.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Resource:** New Employee\n" +
        "- **Onboarding Portal:** https://portal.example.com/onboarding\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Initiate onboarding] [Edit details] [Cancel]",
      "I need to initiate onboarding, what should I do?":
        "**1.** You need to initiate onboarding. Let me check your onboarding portal and guide you through the initiation process...\n\n---\n\n" +
        "**2.** Initiating onboarding helps ensure a smooth transition and integration into your new role or team.\n\n---\n\n" +
        "**3.** Please confirm the necessary details for onboarding. Once confirmed, I'll initiate your onboarding.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Resource:** New Employee\n" +
        "- **Onboarding Portal:** https://portal.example.com/onboarding\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Initiate onboarding] [Edit details] [Cancel]",
      "How do I track onboarding progress and tasks?":
        "**1.** You want to track onboarding progress and tasks. Let me guide you through the process...\n\n---\n\n" +
        "**2.** Tracking onboarding progress and tasks helps ensure a smooth transition and integration into your new role or team.\n\n---\n\n" +
        "**3.** Would you like me to guide you through tracking onboarding progress and tasks?",
    }
  },
  'travel-request': {
    prompts: [
      { text: "I need to book a business trip", highlighted: "book a business trip" },
      { text: "I need to raise a travel request, what should I do?", highlighted: "need to raise travel request" },
      { text: "How do I check available flight options?", highlighted: "check available flight options" },
    ],
    responses: {
      "I need to book a business trip":
        "**1.** You need to book a business trip. Let me check your travel dates and destination...\n\n---\n\n" +
        "**2.** I'll check available flight options and guide you through the booking process.\n\n---\n\n" +
        "**3.** Please confirm the travel dates and destination. I'll then check available flight options and guide you through the booking process.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Travel Dates:** 2024-03-15 to 2024-03-18\n" +
        "- **Destination:** New York, NY\n" +
        "- **Purpose:** Business\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Book travel] [Edit details] [Cancel]",
      "I need to raise a travel request, what should I do?":
        "**1.** You need to raise a travel request. Let me check your travel dates and destination...\n\n---\n\n" +
        "**2.** I'll check available flight options and guide you through the booking process.\n\n---\n\n" +
        "**3.** Please confirm the travel dates and destination. I'll then check available flight options and guide you through the booking process.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Travel Dates:** 2024-03-15 to 2024-03-18\n" +
        "- **Destination:** New York, NY\n" +
        "- **Purpose:** Business\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Book travel] [Edit details] [Cancel]",
      "How do I check available flight options?":
        "**1.** You want to check available flight options. Let me check the available flight options...\n\n---\n\n" +
        "**2.** I'll guide you through the process to check available flight options.\n\n---\n\n" +
        "**3.** Would you like me to guide you through checking available flight options?",
    }
  },
  'visa-processing': {
    prompts: [
      { text: "How do I start visa processing?", highlighted: "start visa processing" },
      { text: "I need visa processing help, what should I do?", highlighted: "need visa processing help" },
      { text: "How do I check visa processing status?", highlighted: "check visa processing status" },
    ],
    responses: {
      "How do I start visa processing?":
        "**1.** I see you need visa processing help. Let me check your visa processing portal and guide you through the initiation process...\n\n---\n\n" +
        "**2.** Starting visa processing helps ensure a smooth transition and integration into your new role or team.\n\n---\n\n" +
        "**3.** Please confirm the necessary details for visa processing. Once confirmed, I'll initiate your visa processing.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Visa Processing Portal:** https://portal.example.com/visa-processing\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Start visa processing] [Edit details] [Cancel]",
      "I need visa processing help, what should I do?":
        "**1.** You need visa processing help. Let me check your visa processing portal and guide you through the initiation process...\n\n---\n\n" +
        "**2.** Starting visa processing helps ensure a smooth transition and integration into your new role or team.\n\n---\n\n" +
        "**3.** Please confirm the necessary details for visa processing. Once confirmed, I'll initiate your visa processing.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Visa Processing Portal:** https://portal.example.com/visa-processing\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Start visa processing] [Edit details] [Cancel]",
      "How do I check visa processing status?":
        "**1.** You want to check visa processing status. Let me check the visa processing status...\n\n---\n\n" +
        "**2.** I'll guide you through the process to check visa processing status.\n\n---\n\n" +
        "**3.** Would you like me to guide you through checking visa processing status?",
    }
  },
  'travel-booking': {
    prompts: [
      { text: "How do I book travel?", highlighted: "book travel" },
      { text: "I need to book travel, what should I do?", highlighted: "need to book travel" },
      { text: "How do I check out bookings via payment gateway?", highlighted: "check out bookings via payment gateway" },
    ],
    responses: {
      "How do I book travel?":
        "**1.** I see you want to book travel. Let me check your travel booking portal and guide you through the booking process...\n\n---\n\n" +
        "**2.** I'll guide you through the process to book travel.\n\n---\n\n" +
        "**3.** Would you like me to guide you through booking travel?",
      "I need to book travel, what should I do?":
        "**1.** You need to book travel. Let me check your travel booking portal and guide you through the booking process...\n\n---\n\n" +
        "**2.** I'll guide you through the process to book travel.\n\n---\n\n" +
        "**3.** Would you like me to guide you through booking travel?",
      "How do I check out bookings via payment gateway?":
        "**1.** You want to check out bookings via payment gateway. Let me guide you through the process...\n\n---\n\n" +
        "**2.** I'll guide you through the process to check out bookings via payment gateway.\n\n---\n\n" +
        "**3.** Would you like me to guide you through checking out bookings via payment gateway?",
    }
  },
  'travel-approval': {
    prompts: [
      { text: "How do I get travel approval?", highlighted: "get travel approval" },
      { text: "I need travel approval, what should I do?", highlighted: "need travel approval" },
      { text: "How do I check travel approval status?", highlighted: "check travel approval status" },
    ],
    responses: {
      "How do I get travel approval?":
        "**1.** I see you need travel approval. Let me check your travel approval portal and guide you through the approval process...\n\n---\n\n" +
        "**2.** Getting travel approval helps ensure a smooth transition and integration into your new role or team.\n\n---\n\n" +
        "**3.** Please confirm the necessary details for travel approval. Once confirmed, I'll guide you through the approval process.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Travel Approval Portal:** https://portal.example.com/travel-approval\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Get travel approval] [Edit details] [Cancel]",
      "I need travel approval, what should I do?":
        "**1.** You need travel approval. Let me check your travel approval portal and guide you through the approval process...\n\n---\n\n" +
        "**2.** Getting travel approval helps ensure a smooth transition and integration into your new role or team.\n\n---\n\n" +
        "**3.** Please confirm the necessary details for travel approval. Once confirmed, I'll guide you through the approval process.\n\n" +
        "- **User:** John Doe (john.doe@example.com)\n" +
        "- **Travel Approval Portal:** https://portal.example.com/travel-approval\n\n" +
        "👉 **Please confirm** if these details are correct, or let me know if you'd like to edit your request.\n\n" +
        "[Get travel approval] [Edit details] [Cancel]",
      "How do I check travel approval status?":
        "**1.** You want to check travel approval status. Let me check the travel approval status...\n\n---\n\n" +
        "**2.** I'll guide you through the process to check travel approval status.\n\n---\n\n" +
        "**3.** Would you like me to guide you through checking travel approval status?",
    }
  },
  'travel-expenses': {
    prompts: [
      { text: "How do I log travel expenses?", highlighted: "log travel expenses" },
      { text: "I need to log travel expenses, what should I do?", highlighted: "need to log travel expenses" },
      { text: "How do I view travel expense reports?", highlighted: "view travel expense reports" },
    ],
    responses: {
      "How do I log travel expenses?":
        "**1.** I see you need to log travel expenses. Let me guide you through the process...\n\n---\n\n" +
        "**2.** Logging travel expenses helps ensure accurate expense tracking and reimbursement.\n\n---\n\n" +
        "**3.** Would you like me to guide you through logging travel expenses?",
      "I need to log travel expenses, what should I do?":
        "**1.** You need to log travel expenses. Let me guide you through the process...\n\n---\n\n" +
        "**2.** Logging travel expenses helps ensure accurate expense tracking and reimbursement.\n\n---\n\n" +
        "**3.** Would you like me to guide you through logging travel expenses?",
      "How do I view travel expense reports?":
        "**1.** You want to view travel expense reports. Let me guide you through the process...\n\n---\n\n" +
        "**2.** I'll guide you through the process to view travel expense reports.\n\n---\n\n" +
        "**3.** Would you like me to guide you through viewing travel expense reports?",
    }
  },
}; 