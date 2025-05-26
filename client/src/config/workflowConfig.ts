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
  'Finance': {
    heading: '💰 Try it yourself!',
    description: "Manage your finance-related tasks. Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Submit an expense claim',
      'Check reimbursement status',
      'Request a budget',
      'Query invoices',
      'Check vendor payment status',
    ],
  },
  'Legal': {
    heading: '⚖️ Try it yourself!',
    description: "Manage your legal-related tasks. Here's what you can do with RC Agentic AI Playground:",
    bullets: [
      'Request contract review',
      'Submit NDA request',
      'Query company policies',
      'Run compliance checks',
      'Get legal support',
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
        "To reset your Azure AD password, please confirm the following details:\n\n- **User:** John Doe (john.doe@rc.com)\n- **Application:** Azure AD\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Reset Password] [Edit Details] [Cancel]",
      "Reset Password":
        "Your password reset request is being processed. You will receive a notification with further instructions once it's completed. [View Reset Status] [Cancel]",
      "Password Reset Complete":
        "Your Azure AD password has been successfully reset. A confirmation email has been sent to john.doe@rc.com.\n\n[Login with New Password] [Main Menu]",
      "Login with New Password":
        "You can now log in with your new password. If you encounter any issues, please contact IT support.\n\n[Main Menu] [Contact IT Support]",
      "View Reset Status":
        "Current status: Password reset completed. Please check your email for further instructions.\n\n[Login with New Password] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your password reset request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Reset Password] [Cancel]",
      "Cancel": "**1.** Your password reset request has been cancelled.\n\n[Main menu] [Reset Password]",
      "My password expired, what should I do?":
        "To reset your expired password, please confirm the following details:\n\n- **User:** John Doe (john.doe@rc.com)\n- **Application:** Azure AD\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Reset Expired Password] [Edit Details] [Cancel]",
      "Reset Expired Password":
        "Your expired password reset request is being processed. You will receive a notification with further instructions once it's completed. [View Reset Status] [Cancel]",
      "How do I change my password?":
        "To change your password, please confirm the following details:\n\n- **User:** John Doe (john.doe@rc.com)\n- **Application:** Azure AD\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Change Password] [Edit Details] [Cancel]",
      "Change Password":
        "Your password change request is being processed. You will receive a notification with further instructions once it's completed. [View Change Status] [Cancel]",
      "View Change Status":
        "Current status: Password change completed. Please check your email for further instructions.\n\n[Login with New Password] [Main Menu]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'unlock-account': {
    prompts: [
      { text: "How do I unlock my Azure AD account?", highlighted: "unlock my Azure AD account" },
      { text: "I'm locked out, can you help?", highlighted: "locked out" },
    ],
    responses: {
      "How do I unlock my Azure AD account?":
        "**1.** I see your account is locked. Let's get you back in.\n\n---\n\n" +
        "**2.** Please confirm your username and choose a verification method:\n- Receive a code by email\n- Receive a code by SMS\n\n[Send code to email] [Send code to SMS] [Contact IT support] [Cancel]\n\n---\n\n" +
        "**3.** Once verified, I'll unlock your account and notify you. If you're still having trouble, I can escalate to IT support.",
      "I'm locked out, can you help?":
        "**1.** Sorry to hear you're locked out. I can help you regain access.\n\n---\n\n" +
        "**2.** Please provide your username or employee ID.\n\n[Enter username] [Contact IT support] [Cancel]\n\n---\n\n" +
        "**3.** I'll verify your identity and unlock your account. If you need urgent access, I can escalate your request.",
      "Send code to email":
        "A verification code has been sent to your email. Please enter the code to proceed. [Enter code] [Contact IT support] [Cancel]",
      "Send code to SMS":
        "A verification code has been sent to your phone. Please enter the code to proceed. [Enter code] [Contact IT support] [Cancel]",
      "Enter code":
        "Your account has been unlocked. You can now log in with your credentials. [Login Now] [Contact IT support] [Main Menu]",
      "Login Now":
        "You are now logged in. [Main Menu] [Contact IT support]",
      "Enter username":
        "Please enter your username or employee ID to proceed. [Contact IT support] [Cancel]",
      "Contact IT support":
        "You are being connected to IT support. Please wait for further instructions. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'request-software': {
    prompts: [
      { text: "How do I request new software?", highlighted: "request new software" },
      { text: "Can I get access to Power BI?", highlighted: "access to Power BI" },
      { text: "Can you give me access to Zoom?", highlighted: "access to Zoom" },
    ],
    responses: {
      "How do I request new software?":
        "To request new software, please confirm the following details:\n\n- **User:** Priya Nair (priya.nair@rc.com)\n- **Department:** Cloud Security\n- **Software:** Microsoft Defender for Cloud\n- **License Type:** Enterprise E5\n- **Business Justification:** Security compliance for new client onboarding (Project Orion)\n- **Requested Start Date:** 2024-07-22\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Software Request] [Edit Details] [Cancel]",
      "Submit Software Request":
        "Your software request for Microsoft Defender for Cloud (Enterprise E5) is being reviewed. You will receive approval status at priya.nair@rc.com. [View Request Status] [Contact IT] [Cancel]",
      "Software Request Complete":
        "Your software request has been approved. Installation will begin on July 23, 2024. [Open in Software Portal] [Request Another Software] [Main Menu]",
      "Open in Software Portal":
        "You can now manage your software in the Software Portal. [Request Another Software] [Main Menu]",
      "Request Another Software":
        "Let's start a new software request. Please provide the software name and purpose. [Main Menu] [Cancel]",
      "View Request Status":
        "Current status: Pending manager approval. [Contact Manager] [Contact IT] [Main Menu]",
      "Edit Details": "**1.** Please update the following details for your software request.\n\n- Software Name\n- License Type\n- Business Justification\n- Requested Start Date\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Software Request] [Cancel]",
      "Cancel": "**1.** Your software request has been cancelled.\n\n[Main menu] [Submit Software Request]",
      "Can I get access to Power BI?":
        "To request access to Power BI, please confirm the following details:\n\n- **User:** Priya Nair (priya.nair@rc.com)\n- **Department:** Cloud Security\n- **Software:** Microsoft Power BI\n- **License Type:** Pro\n- **Business Justification:** Data visualization for Project Orion\n- **Requested Start Date:** 2024-07-22\n\n[Submit Software Request] [Edit Details] [Cancel]",
      "Can you give me access to Zoom?":
        "To request access to Zoom, please confirm the following details:\n\n- **User:** Priya Nair (priya.nair@rc.com)\n- **Department:** Cloud Security\n- **Software:** Zoom\n- **License Type:** Business Plus\n- **Business Justification:** Virtual client meetings for Project Orion\n- **Requested Start Date:** 2024-07-22\n\n[Submit Software Request] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'group-management': {
    prompts: [
      { text: "How do I add a user to a group?", highlighted: "add a user to a group" },
      { text: "How can I see all members of a group?", highlighted: "see all members of a group" },
      { text: "Am I part of the product group?", highlighted: "part of the product group" },
    ],
    responses: {
      "How do I add a user to a group?":
        "To add a user to a group, please confirm the following details:\n\n- **User:** Aisha El-Sayed (aisha.elsayed@rc.com)\n- **Group:** Customer Success - EMEA\n- **Role:** Senior Account Manager\n- **Access Expiration:** 2025-01-31\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Add User to Group] [Edit Details] [Cancel]",
      "Add User to Group":
        "Adding user to the group. Awaiting group owner approval. You will receive a confirmation at aisha.elsayed@rc.com. [View Group Status] [Contact Group Owner] [Cancel]",
      "Group Update Complete":
        "Aisha El-Sayed has been added to the Customer Success - EMEA group. Group ID: GRP-2024-EMEA-002. [View Group Members] [Add Another User] [Main Menu]",
      "View Group Members":
        "Current members of Customer Success - EMEA:\n- Aisha El-Sayed (Senior Account Manager, until 2025-01-31)\n- Tomás García (Director)\n- Fatima Zahra (Support Lead)\n\n[Export List] [Manage Permissions] [Main Menu]",
      "Export List":
        "The group membership list (CustomerSuccessEMEA_August2024.csv) has been exported and sent to your email. [Main Menu] [Manage Permissions] [Cancel]",
      "Manage Permissions":
        "Group permissions have been updated. [Main Menu] [Cancel]",
      "Add Another User":
        "Let's add another user to a group. Please provide the user and group details. [Main Menu] [Cancel]",
      "Edit Details": "**1.** Please update the following details for your group management request.\n\n- User Name\n- Group Name\n- Role\n- Access Expiration\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Add User to Group] [Cancel]",
      "Cancel": "**1.** Your group management request has been cancelled.\n\n[Main menu] [Add User to Group]",
      "How can I see all members of a group?":
        "To view group members, please confirm the following details:\n\n- **Group Name:** Customer Success - EMEA\n\n[View Group Members] [Edit Details] [Cancel]",
      "Am I part of the product group?":
        "Checking your membership in the Customer Success - EMEA group... [View Membership Status] [Cancel]",
      "View Membership Status":
        "You are a member of the Customer Success - EMEA group as Senior Account Manager. [Check Another Group] [Main Menu] [Cancel]",
      "Check Another Group":
        "Please enter the group name to check your membership. [Main Menu] [Cancel]",
      "View Group Status":
        "Current status: Awaiting group owner approval. [Contact Group Owner] [Main Menu] [Cancel]",
      "Contact Group Owner":
        "You are being connected to the group owner for approval. Please wait for further instructions. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'user-provisioning': {
    prompts: [
      { text: "How do I create a new user in Azure AD?", highlighted: "create a new user" },
      { text: "How do I assign a role to a user?", highlighted: "assign a role to a user" },
    ],
    responses: {
      "How do I create a new user in Azure AD?":
        "To create a new user, please confirm the following details:\n\n- **User Name:** Jun Ho Park\n- **Email:** junho.park@rc.com\n- **Department:** Finance\n- **Role:** Financial Analyst\n- **Start Date:** 2024-08-05\n- **Manager:** Emily Carter\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Create User] [Edit Details] [Cancel]",
      "Create User":
        "Your request to create a new user account for Jun Ho Park is being processed. You will receive the account details at junho.park@rc.com. [View Provisioning Status] [Contact IT] [Cancel]",
      "User Provisioning Complete":
        "The new user account for Jun Ho Park has been created successfully. User ID: USR-2024-992. [Create Another User] [Main Menu]",
      "Create Another User":
        "Let's start a new user provisioning request. Please provide the user details. [Main Menu] [Cancel]",
      "View Provisioning Status":
        "Current status: Awaiting manager approval. [Contact Manager] [Contact IT] [Main Menu]",
      "Edit Details": "**1.** Please update the following details for your user provisioning request.\n\n- User Name\n- Department\n- Role\n- Start Date\n- Manager\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Create User] [Cancel]",
      "Cancel": "**1.** Your user provisioning request has been cancelled.\n\n[Main menu] [Create User]",
      "How do I assign a role to a user?":
        "To assign a role, please confirm the following details:\n\n- **User:** Jun Ho Park (junho.park@rc.com)\n- **Role:** Financial Analyst\n- **Department:** Finance\n\n[Assign Role] [Edit Details] [Cancel]",
      "Assign Role":
        "Your request to assign the Financial Analyst role to Jun Ho Park is being processed. You will receive confirmation at junho.park@rc.com. [View Role Status] [Contact IT] [Cancel]",
      "User Role Assignment Complete":
        "The Financial Analyst role has been assigned to Jun Ho Park. [Assign Another Role] [Main Menu]",
      "Assign Another Role":
        "Let's assign another role. Please provide the user and role details. [Main Menu] [Cancel]",
      "View Role Status":
        "Current status: Role assigned and active. [Assign Another Role] [Contact IT] [Main Menu]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'app-registration': {
    prompts: [
      { text: "How do I register a new app in Azure AD?", highlighted: "register a new app" },
      { text: "How do I configure permissions for an app?", highlighted: "configure permissions for an app" },
    ],
    responses: {
      "How do I register a new app in Azure AD?":
        "To register a new app, please confirm the following details:\n\n- **App Name:** Event Scheduler\n- **Owner:** Sofia Rossi (sofia.rossi@rc.com)\n- **Purpose:** Internal event management for RC\n- **Environment:** Production\n- **Requested Go-Live:** 2024-08-12\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Register App] [Edit Details] [Cancel]",
      "Register App":
        "Your app registration for Event Scheduler is being reviewed by the security team. You will receive the app credentials at sofia.rossi@rc.com. [View Registration Status] [Contact Security] [Cancel]",
      "App Registration Complete":
        "Your app 'Event Scheduler' has been registered successfully. App ID: APP-2024-ES-001. [Open in Azure Portal] [Register Another App] [Main Menu]",
      "Open in Azure Portal":
        "You can now manage your app in the Azure Portal. [Register Another App] [Main Menu]",
      "Register Another App":
        "Let's start a new app registration. Please provide the app name and purpose. [Main Menu] [Cancel]",
      "View Registration Status":
        "Current status: Awaiting security review. [Contact Security] [Main Menu]",
      "Edit Details": "**1.** Please update the following details for your app registration request.\n\n- App Name\n- Owner\n- Purpose\n- Environment\n- Requested Go-Live\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Register App] [Cancel]",
      "Cancel": "**1.** Your app registration request has been cancelled.\n\n[Main menu] [Register App]",
      "How do I configure permissions for an app?":
        "To configure app permissions, please confirm the following details:\n\n- **App Name:** Event Scheduler\n- **Permissions:** User.Read, Calendar.ReadWrite, Mail.Send\n- **Scope:** Production\n\n[Update Permissions] [Edit Details] [Cancel]",
      "Update Permissions":
        "Your app permissions update is being processed. You will receive confirmation at sofia.rossi@rc.com. [View Permissions Status] [Contact Security] [Cancel]",
      "App Permissions Update Complete":
        "The permissions for 'Event Scheduler' have been updated successfully. [Open in Azure Portal] [Update More Permissions] [Main Menu]",
      "Update More Permissions":
        "Let's update more app permissions. Please provide the app name and permissions. [Main Menu] [Cancel]",
      "View Permissions Status":
        "Current status: Permissions updated and active. [Open in Azure Portal] [Contact Security] [Main Menu]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'audit-logs': {
    prompts: [
      { text: "How do I view Azure AD audit logs?", highlighted: "view Azure AD audit logs" },
      { text: "Can I export audit logs?", highlighted: "export audit logs" },
    ],
    responses: {
      "How do I view Azure AD audit logs?":
        "To view Azure AD audit logs, please confirm the following details:\n\n- **User:** Gabriel Müller (gabriel.muller@rc.com)\n- **Date Range:** 2024-07-10 to 2024-07-24\n- **Log Type:** User sign-in and admin activity\n- **Department:** IT Security\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Retrieve Audit Logs] [Edit Details] [Cancel]",
      "Retrieve Audit Logs":
        "Your audit logs request for July 10-24, 2024 is being processed. You will receive the export at gabriel.muller@rc.com. [View Export Status] [Contact IT Security] [Cancel]",
      "Audit Logs Retrieval Complete":
        "Your audit logs export is ready. Log ID: LOG-2024-789. [Download as CSV] [Download as PDF] [Main Menu]",
      "Download as CSV":
        "The audit logs have been exported as a CSV file (AuditLogs_July2024.csv). [Download Again] [Export Another Period] [Main Menu]",
      "Download as PDF":
        "The audit logs have been exported as a PDF file (AuditLogs_July2024.pdf). [Download Again] [Export Another Period] [Main Menu]",
      "Export Another Period":
        "Let's export another period of audit logs. Please provide the date range. [Main Menu] [Cancel]",
      "View Export Status":
        "Current status: Export job completed. [Download as CSV] [Download as PDF] [Contact IT Security] [Main Menu]",
      "Edit Details": "**1.** Please update the following details for your audit logs request.\n\n- Date Range\n- Log Type\n- Department\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Retrieve Audit Logs] [Cancel]",
      "Cancel": "**1.** Your audit logs request has been cancelled.\n\n[Main menu] [Retrieve Audit Logs]",
      "Can I export audit logs?":
        "To export audit logs, please confirm the following details:\n\n- **User:** Gabriel Müller (gabriel.muller@rc.com)\n- **Date Range:** 2024-07-10 to 2024-07-24\n- **Format:** CSV\n\n[Download as CSV] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'help-support': {
    prompts: [
      { text: "How do I contact support?", highlighted: "contact support" },
      { text: "Where can I find Azure AD documentation?", highlighted: "Azure AD documentation" },
    ],
    responses: {
      "How do I contact support?":
        "To contact support, please confirm the following details:\n\n- **User:** Lila Dubois (lila.dubois@rc.com)\n- **Issue:** MFA not working on mobile device\n- **Priority:** Critical\n- **Preferred contact:** Teams Chat\n- **Ticket Number:** TKT-2024-1123\n- **Requested Callback:** 2024-07-24 10:00 AM\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Support Request] [Edit Details] [Cancel]",
      "Submit Support Request":
        "Your support request for MFA issue is being assigned. An IT specialist will contact you via Teams Chat at 10:00 AM on July 24, 2024. [View Request Status] [Contact IT Support] [Cancel]",
      "Support Request Complete":
        "Your support request has been assigned. Ticket Number: TKT-2024-1123. [Open in Helpdesk Portal] [Submit Another Request] [Main Menu]",
      "Open in Helpdesk Portal":
        "You can now view your ticket and chat with support in the Helpdesk Portal. [Submit Another Request] [Main Menu]",
      "Submit Another Request":
        "Let's start a new support request. Please describe your issue. [Main Menu] [Cancel]",
      "View Request Status":
        "Current status: Assigned to IT specialist. [Open in Helpdesk Portal] [Contact IT Support] [Main Menu]",
      "Edit Details": "**1.** Please update the following details for your support request.\n\n- Issue\n- Priority\n- Preferred contact\n- Requested Callback\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Support Request] [Cancel]",
      "Cancel": "**1.** Your help/support request has been cancelled.\n\n[Main menu] [Submit Support Request]",
      "Where can I find Azure AD documentation?":
        "Azure AD documentation is available online. Please select an option below.\n\n[Get Documentation Link] [Search Topic] [Main Menu] [Cancel]",
      "Get Documentation Link":
        "Here is the direct link to the official Azure AD documentation. [Search Topic] [Main Menu] [Cancel]",
      "Search Topic":
        "The documentation for your topic has been found and provided. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To submit your leave request, please confirm the following details:\n\n- **User:** Ava Patel (ava.patel@rc.com)\n- **Date(s) of leave:** 2024-07-15\n- **Type of leave:** Vacation\n- **Reason:** Family event\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Leave Request] [Edit Details] [Cancel]",
      "Submit Leave Request":
        "Your leave request for 2024-07-15 (Vacation) is being processed. You will receive a confirmation at ava.patel@rc.com. [View Leave Status] [Contact HR] [Cancel]",
      "Leave Request Complete":
        "Your leave request for 2024-07-15 (Vacation) has been approved and recorded for Ava Patel. You will receive a confirmation email shortly. [View Leave Balance] [Request Another Leave] [Main Menu]",
      "View Leave Balance":
        "Your current leave balance is: 14 days remaining. [Request Another Leave] [Main Menu]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
      "Request Another Leave":
        "Let's start a new leave request. Please provide your leave details. [Main Menu] [Cancel]",
      "Edit Details": "**1.** Please provide the updated details for your leave request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Leave Request] [Cancel]",
      "Cancel": "**1.** Your leave request has been cancelled.\n\n[Main menu] [Submit Leave Request]",
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
        "To download your payslip, please confirm the following details:\n\n- **User:** Liam Chen (liam.chen@rc.com)\n- **Month:** July 2024\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Download Payslip] [Edit Details] [Cancel]",
      "Download Payslip":
        "Your payslip for July 2024 is being securely generated. You will receive a download link at liam.chen@rc.com. [View Download Status] [Contact Payroll] [Cancel]",
      "Payslip Download Complete":
        "Your payslip for July 2024 is ready. [Download Payslip_July2024.pdf] [View Payslip History] [Main Menu]",
      "Download Another Payslip":
        "Let's download another payslip. Please provide the month and year. [Main Menu] [Cancel]",
      "View Download Status":
        "Current status: Payslip for July 2024 is ready for download. [Download Payslip_July2024.pdf] [Contact Payroll] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your payslip download request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Download Payslip] [Cancel]",
      "Cancel": "**1.** Your payslip download request has been cancelled.\n\n[Main menu] [Download Payslip]",
      "How do I view payslip history?":
        "To view your payslip history, please confirm the following details:\n\n- **User:** Liam Chen (liam.chen@rc.com)\n- **Date Range:** Last 12 months\n\n[View Payslip History] [Edit Details] [Cancel]",
      "View Payslip History":
        "Your payslip history for the last 12 months is displayed below. [Download Payslip] [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To update your contact details, please confirm the following information:\n\n- **User:** Sophia Williams (sophia.williams@rc.com)\n- **New Contact Details:** 555-0199, 123 Oak St, Springfield\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Update Contact Details] [Edit Details] [Cancel]",
      "Update Contact Details":
        "Your new contact details are being verified and updated in our system. You will receive a confirmation at sophia.williams@rc.com. [View Update Status] [Contact HR] [Cancel]",
      "Contact Details Update Complete":
        "Your contact details have been updated successfully. [Review Personal Information] [Update Again] [Main Menu]",
      "Review Personal Information":
        "Your current personal information is displayed below. [Update Contact Details] [Main Menu] [Cancel]",
      "View Update Status":
        "Current status: Contact details updated successfully. [Review Personal Information] [Contact HR] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your contact information.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Update Contact Details] [Cancel]",
      "Cancel": "**1.** Your contact details update request has been cancelled.\n\n[Main menu] [Update Contact Details]",
      "How do I review my personal information?":
        "To review your personal information, please confirm the following details:\n\n- **User:** Sophia Williams (sophia.williams@rc.com)\n\n[Review Personal Information] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To contact HR support, please confirm the following details:\n\n- **User:** Noah Kim (noah.kim@rc.com)\n- **Issue:** Payroll query\n- **Preferred contact:** Email\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit HR Request] [Edit Details] [Cancel]",
      "Submit HR Request":
        "Your HR request is being assigned to a specialist. You will receive a response at noah.kim@rc.com. [View Request Status] [Contact HR] [Cancel]",
      "HR Request Complete":
        "Your HR request has been assigned. An HR specialist will contact you within 1 business day. [Submit Another HR Request] [Main Menu]",
      "Submit Another HR Request":
        "Let's start a new HR helpdesk request. Please describe your issue. [Main Menu] [Cancel]",
      "View Request Status":
        "Current status: Awaiting HR specialist response. [Contact HR] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your HR helpdesk request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit HR Request] [Cancel]",
      "Cancel": "**1.** Your HR helpdesk request has been cancelled.\n\n[Main menu] [Submit HR Request]",
      "How do I browse HR FAQs and policies?":
        "HR FAQs and policies are displayed below. [View Policy] [Contact HR] [Main Menu] [Cancel]",
      "View Policy":
        "The selected HR policy is displayed below. [Contact HR] [Main Menu] [Cancel]",
      "Contact HR":
        "You are being connected to an HR specialist. Please wait for further instructions. [Main Menu] [Cancel]",
      "I need HR help, what should I do?":
        "Let's get started with your HR helpdesk request. Please describe your issue. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To initiate onboarding, please confirm the following details:\n\n- **User:** Sophia Williams (sophia.williams@rc.com)\n- **Department:** IT\n- **Start Date:** 2024-07-17\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Initiate Onboarding] [Edit Details] [Cancel]",
      "Initiate Onboarding":
        "Onboarding for Sophia Williams is in progress. Welcome email and onboarding checklist have been sent. [Track Onboarding Progress] [Contact IT] [Cancel]",
      "Onboarding Initiated Complete":
        "Onboarding complete. Sophia Williams is now active and all onboarding tasks are marked as complete. [View Onboarding Checklist] [Initiate Another Onboarding] [Main Menu]",
      "Track Onboarding Progress":
        "Current onboarding progress and tasks are displayed below. [View Onboarding Checklist] [Contact IT] [Main Menu] [Cancel]",
      "View Onboarding Status":
        "Current status: Onboarding initiated and in progress. [Track Onboarding Progress] [Contact IT] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your onboarding request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Initiate Onboarding] [Cancel]",
      "Cancel": "**1.** Your onboarding request has been cancelled.\n\n[Main menu] [Initiate Onboarding]",
      "How do I track onboarding progress and tasks?":
        "To track onboarding progress and tasks, please confirm the following details:\n\n- **User:** Sophia Williams (sophia.williams@rc.com)\n\n[Track Onboarding Progress] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To book your business trip, please confirm the following details:\n\n- **User:** Ethan Rivera (ethan.rivera@rc.com)\n- **Destination:** London\n- **Dates:** 2024-08-05 to 2024-08-09\n- **Purpose:** Client presentation\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Book Business Trip] [Edit Details] [Cancel]",
      "Book Business Trip":
        "Your business trip request for London (Aug 5–9, 2024) is being reviewed. Awaiting manager approval and travel desk confirmation. [View Request Status] [Contact Travel Desk] [Cancel]",
      "Business Trip Booking Complete":
        "Your business trip to London is confirmed. Itinerary and tickets have been sent to ethan.rivera@rc.com. [Download Itinerary] [Book Another Trip] [Main Menu]",
      "Download Itinerary":
        "Your itinerary (London_August2024.pdf) is ready for download. [Download Again] [Book Another Trip] [Main Menu]",
      "Book Another Trip":
        "Let's start a new business trip booking. Please provide your destination and dates. [Main Menu] [Cancel]",
      "View Booking Status":
        "Current status: Awaiting manager approval. [Contact Manager] [Contact Travel Desk] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your business trip booking.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Book Business Trip] [Cancel]",
      "Cancel": "**1.** Your business trip booking request has been cancelled.\n\n[Main menu] [Book Business Trip]",
      "How do I check available flight options?":
        "To check available flight options, please confirm the following details:\n\n- **User:** Ethan Rivera (ethan.rivera@rc.com)\n- **Destination:** London\n- **Dates:** 2024-08-05 to 2024-08-09\n\n[Check Flight Options] [Edit Details] [Cancel]",
      "Check Flight Options":
        "Available flight options are displayed below. [Book Flight] [Contact Travel Desk] [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To start visa processing, please confirm the following details:\n\n- **User:** Mia Zhang (mia.zhang@rc.com)\n- **Visa Type:** Business\n- **Destination:** London\n- **Purpose:** Client presentation\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Start Visa Processing] [Edit Details] [Cancel]",
      "Start Visa Processing":
        "Your visa processing request for London (Business) is being submitted. You will receive status updates at mia.zhang@rc.com. [View Visa Status] [Contact Visa Desk] [Cancel]",
      "Visa Processing Complete":
        "Your visa processing request for Mia Zhang has been approved. A confirmation email and visa document have been sent to mia.zhang@rc.com. [Download Visa Document] [Check Visa Status] [Main Menu]",
      "Download Visa Document":
        "Your visa document (Visa_London_Business_August2024.pdf) is ready for download. [Download Again] [Start Another Visa Processing] [Main Menu]",
      "Check Visa Status":
        "Current visa processing status: Approved. Please check your email for further instructions. [Download Visa Document] [Contact Visa Desk] [Main Menu]",
      "View Visa Status":
        "Current status: Visa processing approved.\n\n[Check Visa Status] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your visa processing request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Start Visa Processing] [Cancel]",
      "Cancel": "**1.** Your visa processing request has been cancelled.\n\n[Main menu] [Start Visa Processing]",
      "How do I check visa processing status?":
        "To check your visa processing status, please confirm the following details:\n\n- **User:** Mia Zhang (mia.zhang@rc.com)\n\n[Check Visa Status] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To book your travel, please confirm the following details:\n\n- **User:** John Doe (john.doe@example.com)\n- **Destination:** New York\n- **Dates:** 2024-07-15 to 2024-07-20\n- **Purpose:** Client meeting\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Book Travel] [Edit Details] [Cancel]",
      "Book Travel":
        "Your travel booking is being processed. You will receive confirmation and itinerary details soon. [View Booking Status] [Cancel]",
      "Travel Booking Complete":
        "Your travel booking is complete. Confirmation and itinerary have been sent to your email.\n\n[Download Itinerary] [Book Another Trip] [Main Menu]",
      "Download Itinerary":
        "Your itinerary (NYC_July2024.pdf) has been downloaded and sent to your email.\n\n[Book Another Trip] [Main Menu]",
      "Book Another Trip":
        "Let's start a new travel booking. Please provide your destination and dates. [Main Menu] [Cancel]",
      "View Booking Status":
        "Current status: Confirmed. All bookings are complete.\n\n[Download Itinerary] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your travel booking.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Book Travel] [Cancel]",
      "Cancel": "**1.** Your travel booking request has been cancelled.\n\n[Main menu] [Book Travel]",
      "How do I check out bookings via payment gateway?":
        "To complete your booking, please proceed to payment.\n\n[Pay Now] [Cancel]",
      "Pay Now":
        "Your payment has been processed successfully. Booking confirmation will be sent to your email.\n\n[Download Itinerary] [Main Menu]",
      "I need to book travel, what should I do?":
        "Let's get started with your travel booking. Please provide your destination and dates. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To request travel approval, please confirm the following details:\n\n- **User:** Ethan Rivera (ethan.rivera@rc.com)\n- **Trip:** London, 2024-08-05 to 2024-08-09\n- **Purpose:** Client presentation\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit for Approval] [Edit Details] [Cancel]",
      "Submit for Approval":
        "Your travel approval request is being reviewed by your manager. You will receive a confirmation at ethan.rivera@rc.com. [View Approval Status] [Contact Manager] [Cancel]",
      "Travel Approval Complete":
        "Your travel approval for London (Aug 5–9, 2024) is granted. You may proceed with booking. [View Approval Details] [Book Travel] [Main Menu]",
      "View Approval Details":
        "Your travel approval details are displayed below. [Book Travel] [Main Menu] [Cancel]",
      "Submit Another Approval":
        "Let's start a new travel approval request. Please provide your trip details. [Main Menu] [Cancel]",
      "View Approval Status":
        "Current status: Awaiting manager approval. [Contact Manager] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your travel approval request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit for Approval] [Cancel]",
      "Cancel": "**1.** Your travel approval request has been cancelled.\n\n[Main menu] [Submit for Approval]",
      "How do I check travel approval status?":
        "To check your travel approval status, please confirm the following details:\n\n- **User:** Ethan Rivera (ethan.rivera@rc.com)\n\n[View Approval Status] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
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
        "To log your travel expenses, please confirm the following details:\n\n- **User:** Mia Zhang (mia.zhang@rc.com)\n- **Trip:** London, 2024-08-05 to 2024-08-09\n- **Expense Type:** Flight, Hotel, Meals\n- **Amount:** $2,150\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Expense] [Edit Details] [Cancel]",
      "Submit Expense":
        "Your travel expense for London (Aug 5–9, 2024) is being submitted for reimbursement. You will receive a confirmation at mia.zhang@rc.com. [View Expense Status] [Contact Finance] [Cancel]",
      "Travel Expense Submission Complete":
        "Your travel expense for London (2024-08-05 to 2024-08-09) for Mia Zhang has been submitted and is under review by Finance. You will receive a notification once processed. [Log Another Expense] [Download Expense Report] [Main Menu]",
      "Download Expense Report":
        "Your expense report (TravelExpense_London_August2024.pdf) is ready for download. [Download Again] [Log Another Expense] [Main Menu]",
      "Log Another Expense":
        "Let's log another travel expense. Please provide the details. [Main Menu] [Cancel]",
      "View Expense Status":
        "Current status: Submitted and under review. [Download Expense Report] [Contact Finance] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your travel expense.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Expense] [Cancel]",
      "Cancel": "**1.** Your travel expense submission has been cancelled.\n\n[Main menu] [Submit Expense]",
      "How do I view travel expense reports?":
        "To view your travel expense reports, please confirm the following details:\n\n- **User:** Mia Zhang (mia.zhang@rc.com)\n\n[View Expense Reports] [Edit Details] [Cancel]",
      "View Expense Reports":
        "Your travel expense reports are displayed below. [Export Report] [Download Expense Report] [Main Menu] [Cancel]",
      "Export Report":
        "Your expense report has been exported and sent to your email. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'expense-claim': {
    prompts: [
      { text: "How do I submit an expense claim?", highlighted: "submit an expense claim" },
      { text: "What documents are needed for expense claims?", highlighted: "documents needed for expense claims" },
    ],
    responses: {
      "How do I submit an expense claim?":
        "To submit an expense claim, please confirm the following details:\n\n- **User:** Olivia Turner (olivia.turner@rc.com)\n- **Expense Type:** Meals\n- **Amount:** $120\n- **Supporting Documents:** Receipt_July2024.pdf\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Expense Claim] [Edit Details] [Cancel]",
      "Submit Expense Claim":
        "Your expense claim for $120 (Meals) is under review by Finance. You will receive a status update at olivia.turner@rc.com. [View Claim Status] [Contact Finance] [Cancel]",
      "Expense Claim Complete":
        "Your expense claim has been approved. Reimbursement will be processed within 3 business days. [Submit Another Claim] [Download Receipt_July2024.pdf] [Main Menu]",
      "Submit Another Claim":
        "Let's submit another expense claim. Please provide the details. [Main Menu] [Cancel]",
      "View Claim Status":
        "Current status: Under review by Finance. [Contact Finance] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your expense claim.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Expense Claim] [Cancel]",
      "Cancel": "**1.** Your expense claim request has been cancelled.\n\n[Main menu] [Submit Expense Claim]",
      "What documents are needed for expense claims?":
        "The required documents for your expense claim are listed below:\n- Receipts\n- Expense form\n- Approval (if required)\n\n[Upload Documents] [Main Menu] [Cancel]",
      "Upload Documents":
        "Your documents have been uploaded. Please confirm details to proceed. [Submit Expense Claim] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'reimbursement-status': {
    prompts: [
      { text: "How do I check my reimbursement status?", highlighted: "check my reimbursement status" },
      { text: "Why is my reimbursement delayed?", highlighted: "reimbursement delayed" },
    ],
    responses: {
      "How do I check my reimbursement status?":
        "To check your reimbursement status, please confirm the following details:\n\n- **User:** Daniel Lee (daniel.lee@rc.com)\n- **Claim ID:** RIMB-2024-456\n\n[Check Status] [Edit Details] [Cancel]",
      "Check Status":
        "Retrieving your reimbursement status. You will receive an update at daniel.lee@rc.com. [View Status Details] [Contact Finance] [Cancel]",
      "Reimbursement Status Complete":
        "Your reimbursement for claim RIMB-2024-456 (Daniel Lee) has been processed and payment is on its way. [Check Another Status] [Download Payment Receipt] [Main Menu]",
      "Download Payment Receipt":
        "Your payment receipt (Reimbursement_RIMB-2024-456_August2024.pdf) is ready for download. [Download Again] [Check Another Status] [Main Menu]",
      "Check Another Status":
        "Let's check another reimbursement status. Please provide the claim ID. [Main Menu] [Cancel]",
      "View Status Details":
        "Current status: Payment processed. [Download Payment Receipt] [Contact Finance] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your reimbursement status request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Check Status] [Cancel]",
      "Cancel": "**1.** Your reimbursement status request has been cancelled.\n\n[Main menu] [Check Status]",
      "Why is my reimbursement delayed?":
        "To check the reason for your reimbursement delay, please confirm the following details:\n\n- **User:** Daniel Lee (daniel.lee@rc.com)\n- **Claim ID:** RIMB-2024-456\n\n[Check Delay Reason] [Edit Details] [Cancel]",
      "Check Delay Reason":
        "The reason for your reimbursement delay is displayed below. [Contact Support] [Main Menu] [Cancel]",
      "Contact Support":
        "You are being connected to finance support. Please wait for further instructions. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'budget-request': {
    prompts: [
      { text: "How do I request a budget for my project?", highlighted: "request a budget" },
      { text: "What is the approval process for budget requests?", highlighted: "approval process for budget requests" },
    ],
    responses: {
      "How do I request a budget for my project?":
        "To submit your budget request, please confirm the following details:\n\n- **User:** Olivia Turner (olivia.turner@rc.com)\n- **Project:** Website Redesign Q4 2024\n- **Amount:** $18,000\n- **Justification:** UX improvements\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Budget Request] [Edit Details] [Cancel]",
      "Submit Budget Request":
        "Your budget request for 'Website Redesign Q4 2024' is being processed. You will receive approval status at olivia.turner@rc.com. [View Budget Status] [Contact Finance] [Cancel]",
      "Budget Request Complete":
        "Your budget request for 'Website Redesign Q4 2024' by Olivia Turner has been approved. Budget ID: BGT-2024-789. Funds will be allocated by July 31, 2024. [View Budget Status] [Request Another Budget] [Main Menu]",
      "View Budget Status":
        "Current status for Budget ID BGT-2024-789: Approved. Funds will be allocated within 3 business days. [Request Another Budget] [Contact Finance] [Main Menu]",
      "Request Another Budget":
        "Let's start a new budget request. Please provide your project and amount details. [Main Menu] [Cancel]",
      "Edit Details": "**1.** Please provide the updated details for your budget request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Budget Request] [Cancel]",
      "Cancel": "**1.** Your budget request has been cancelled.\n\n[Main menu] [Submit Budget Request]",
      "What is the approval process for budget requests?":
        "The approval process for budget requests is as follows:\n- Submit request\n- Manager review\n- Finance approval\n- Funds allocation\n\n[Submit Budget Request] [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'invoice-query': {
    prompts: [
      { text: "How do I query an invoice?", highlighted: "query an invoice" },
      { text: "How do I get a copy of an invoice?", highlighted: "get a copy of an invoice" },
    ],
    responses: {
      "How do I query an invoice?":
        "To query an invoice, please confirm the following details:\n\n- **User:** Daniel Lee (daniel.lee@rc.com)\n- **Invoice Number:** INV-2024-123\n- **Vendor:** Acme Supplies\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Invoice Query] [Edit Details] [Cancel]",
      "Submit Invoice Query":
        "Your invoice query for INV-2024-123 is being processed. You will receive the details at daniel.lee@rc.com. [View Query Status] [Contact Finance] [Cancel]",
      "Invoice Query Complete":
        "Invoice details for INV-2024-123 (Acme Supplies) are now available. [Download Invoice] [Query Another Invoice] [Main Menu]",
      "Download Invoice":
        "The invoice INV-2024-123 is ready for download. [Download Again] [Query Another Invoice] [Main Menu]",
      "Query Another Invoice":
        "Let's query another invoice. Please provide the invoice number or vendor name. [Main Menu] [Cancel]",
      "View Query Status":
        "Current status: Invoice details retrieved. [Download Invoice] [Contact Finance] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your invoice query.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Invoice Query] [Cancel]",
      "Cancel": "**1.** Your invoice query has been cancelled.\n\n[Main menu] [Submit Invoice Query]",
      "How do I get a copy of an invoice?":
        "To get a copy of an invoice, please confirm the following details:\n\n- **User:** Daniel Lee (daniel.lee@rc.com)\n- **Invoice Number:** INV-2024-123\n\n[Download Invoice] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'vendor-payment': {
    prompts: [
      { text: "How do I check vendor payment status?", highlighted: "check vendor payment status" },
      { text: "How do I initiate a vendor payment?", highlighted: "initiate a vendor payment" },
    ],
    responses: {
      "How do I check vendor payment status?":
        "To check vendor payment status, please confirm the following details:\n\n- **User:** Olivia Turner (olivia.turner@rc.com)\n- **Vendor:** Acme Supplies\n- **Invoice Number:** INV-2024-123\n\n[Check Payment Status] [Edit Details] [Cancel]",
      "Check Payment Status":
        "Your vendor payment status request for Acme Supplies (Invoice INV-2024-123) is being processed. You will receive a status update at olivia.turner@rc.com. [View Payment Status] [Contact Finance] [Cancel]",
      "Vendor Payment Status Complete":
        "The vendor payment for Acme Supplies (Invoice INV-2024-123) has been processed. Payment confirmation has been sent to your email. [Check Another Payment] [Download Invoice] [Main Menu]",
      "Check Another Payment":
        "Let's check another vendor payment status. Please provide the vendor and invoice number. [Main Menu] [Cancel]",
      "View Payment Status":
        "Current status: Payment processed. [Download Invoice] [Contact Finance] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your vendor payment status request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Check Payment Status] [Cancel]",
      "Cancel": "**1.** Your vendor payment status request has been cancelled.\n\n[Main menu] [Check Payment Status]",
      "How do I initiate a vendor payment?":
        "To initiate a vendor payment, please confirm the following details:\n\n- **User:** Olivia Turner (olivia.turner@rc.com)\n- **Vendor:** Acme Supplies\n- **Amount:** $2,500\n- **Invoice Number:** INV-2024-123\n\n[Submit Vendor Payment] [Edit Details] [Cancel]",
      "Submit Vendor Payment":
        "Your vendor payment request for Acme Supplies (Invoice INV-2024-123) is being submitted for approval. You will receive a confirmation once processed. [View Payment Status] [Contact Finance] [Cancel]",
      "Vendor Payment Complete":
        "Your vendor payment request for Acme Supplies (Invoice INV-2024-123) has been approved and processed. Payment confirmation has been sent to your email. [Start New Payment] [Download Invoice] [Main Menu]",
      "Start New Payment":
        "Let's start a new vendor payment request. Please provide the vendor and amount. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'contract-review': {
    prompts: [
      { text: "How do I request a contract review?", highlighted: "request a contract review" },
      { text: "What documents are needed for contract review?", highlighted: "documents needed for contract review" },
    ],
    responses: {
      "How do I request a contract review?":
        "To submit your contract review request, please confirm the following details:\n\n- **User:** Emma Rodriguez (emma.rodriguez@rc.com)\n- **Contract Name:** Service Agreement with TechCorp\n- **Purpose:** Cloud Services Implementation\n- **Upload:** ServiceAgreement_TechCorp_August2024.pdf\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Contract Review] [Edit Details] [Cancel]",
      "Submit Contract Review":
        "Your contract review request is being reviewed by the legal team. You will receive feedback at emma.rodriguez@rc.com. [View Review Status] [Contact Legal] [Cancel]",
      "Contract Review Complete":
        "Your contract review for 'Service Agreement with TechCorp' is complete. Legal team comments and approval are available. [Download Reviewed Contract] [Request Another Review] [Main Menu]",
      "Download Reviewed Contract":
        "The reviewed contract (ServiceAgreement_TechCorp_Reviewed_August2024.pdf) is ready for download. [Download Again] [Request Another Review] [Main Menu]",
      "Request Another Review":
        "Let's start a new contract review. Please provide your contract details. [Main Menu] [Cancel]",
      "View Review Status":
        "Current status: Review complete. [Download Reviewed Contract] [Contact Legal] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your contract review request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Contract Review] [Cancel]",
      "Cancel": "**1.** Your contract review request has been cancelled.\n\n[Main menu] [Submit Contract Review]",
      "What documents are needed for contract review?":
        "The required documents for contract review are listed below:\n- Contract draft (PDF/Word)\n- Statement of work (if applicable)\n- Any prior correspondence\n\n[Upload Contract] [Main Menu] [Cancel]",
      "Upload Contract":
        "Your contract has been uploaded. Please confirm details to proceed. [Submit Contract Review] [Edit Details] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'nda-request': {
    prompts: [
      { text: "How do I request an NDA?", highlighted: "request an NDA" },
      { text: "What is the process for NDA approval?", highlighted: "process for NDA approval" },
    ],
    responses: {
      "How do I request an NDA?":
        "To submit your NDA request, please confirm the following details:\n\n- **User:** Marcus Chen (marcus.chen@rc.com)\n- **Counterparty:** InnovateTech Solutions\n- **Purpose:** Product Development Partnership\n- **Type:** Mutual NDA\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit NDA Request] [Edit Details] [Cancel]",
      "Submit NDA Request":
        "Your NDA request is being reviewed by the legal team. You will receive the document for signature at marcus.chen@rc.com. [View NDA Status] [Contact Legal] [Cancel]",
      "NDA Request Complete":
        "Your NDA request for InnovateTech Solutions is approved. The document is ready for signature. [Download NDA] [Request Another NDA] [Main Menu]",
      "Download NDA":
        "The NDA document (NDA_InnovateTech_August2024.pdf) is ready for download. [Download Again] [Request Another NDA] [Main Menu]",
      "Request Another NDA":
        "Let's start a new NDA request. Please provide the counterparty and purpose details. [Main Menu] [Cancel]",
      "View NDA Status":
        "Current status: Approved and pending signatures. [Download NDA] [Contact Legal] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your NDA request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit NDA Request] [Cancel]",
      "Cancel": "**1.** Your NDA request has been cancelled.\n\n[Main menu] [Submit NDA Request]",
      "What is the process for NDA approval?":
        "The NDA approval process is as follows:\n- Submit request\n- Legal review\n- Counterparty review\n- Signatures\n- Final execution\n\n[Submit NDA Request] [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'policy-query': {
    prompts: [
      { text: "How do I query a company policy?", highlighted: "query a company policy" },
      { text: "Where can I find the employee handbook?", highlighted: "find the employee handbook" },
    ],
    responses: {
      "How do I query a company policy?":
        "To query a company policy, please confirm the following details:\n\n- **User:** Sophia Martinez (sophia.martinez@rc.com)\n- **Policy Type:** Remote Work Policy\n- **Version:** 2024.4\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Policy Query] [Edit Details] [Cancel]",
      "Submit Policy Query":
        "Your request for the Remote Work Policy (Version 2024.4) is being processed. You will receive the document at sophia.martinez@rc.com. [View Policy Status] [Contact HR] [Cancel]",
      "Policy Query Complete":
        "The Remote Work Policy (Version 2024.4) is now available. [Download Policy] [Query Another Policy] [Main Menu]",
      "Download Policy":
        "The policy document (RemoteWorkPolicy_2024.4.pdf) is ready for download. [Download Again] [Query Another Policy] [Main Menu]",
      "Query Another Policy":
        "Let's query another company policy. Please provide the policy type and version. [Main Menu] [Cancel]",
      "View Policy Status":
        "Current status: Policy document retrieved. [Download Policy] [Contact HR] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your policy query.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Policy Query] [Cancel]",
      "Cancel": "**1.** Your policy query has been cancelled.\n\n[Main menu] [Submit Policy Query]",
      "Where can I find the employee handbook?":
        "To access the employee handbook, please confirm the following details:\n\n- **User:** Sophia Martinez (sophia.martinez@rc.com)\n- **Handbook Version:** 2024.3\n\n[Download Handbook] [Edit Details] [Cancel]",
      "Download Handbook":
        "The employee handbook (EmployeeHandbook_2024.3.pdf) is ready for download. [Download Again] [Main Menu]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'compliance-check': {
    prompts: [
      { text: "How do I run a compliance check?", highlighted: "run a compliance check" },
      { text: "What are the steps for compliance reporting?", highlighted: "steps for compliance reporting" },
    ],
    responses: {
      "How do I run a compliance check?":
        "To run a compliance check, please confirm the following details:\n\n- **User:** James Wilson (james.wilson@rc.com)\n- **Check Type:** Data Privacy\n- **Department:** IT\n- **Scope:** Q3 2024\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Run Compliance Check] [Edit Details] [Cancel]",
      "Run Compliance Check":
        "Your Data Privacy compliance check for Q3 2024 is being processed. You will receive the report at james.wilson@rc.com. [View Check Status] [Contact Compliance] [Cancel]",
      "Compliance Check Complete":
        "Your Data Privacy compliance check for Q3 2024 is complete. All requirements have been met. [Download Report] [Run Another Check] [Main Menu]",
      "Download Report":
        "The compliance report (DataPrivacy_Q3_2024.pdf) is ready for download. [Download Again] [Run Another Check] [Main Menu]",
      "Run Another Check":
        "Let's run another compliance check. Please provide the check type and scope. [Main Menu] [Cancel]",
      "View Check Status":
        "Current status: Check completed successfully. [Download Report] [Contact Compliance] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your compliance check.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Run Compliance Check] [Cancel]",
      "Cancel": "**1.** Your compliance check request has been cancelled.\n\n[Main menu] [Run Compliance Check]",
      "What are the steps for compliance reporting?":
        "The steps for compliance reporting are as follows:\n- Identify requirements\n- Gather evidence\n- Review findings\n- Generate report\n- Submit for approval\n\n[Run Compliance Check] [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
  'legal-support': {
    prompts: [
      { text: "How do I get legal support?", highlighted: "get legal support" },
      { text: "Who do I contact for urgent legal issues?", highlighted: "urgent legal issues" },
    ],
    responses: {
      "How do I get legal support?":
        "To request legal support, please confirm the following details:\n\n- **User:** Isabella Kim (isabella.kim@rc.com)\n- **Issue Type:** Contract Dispute\n- **Priority:** High\n- **Description:** Vendor agreement termination\n\n👉 Please confirm if these details are correct, or edit/cancel your request.\n\n[Submit Legal Support Request] [Edit Details] [Cancel]",
      "Submit Legal Support Request":
        "Your legal support request for Contract Dispute is being processed. A legal specialist will contact you at isabella.kim@rc.com within 24 hours. [View Request Status] [Contact Legal] [Cancel]",
      "Legal Support Request Complete":
        "Your legal support request has been assigned to a specialist. Case ID: LS-2024-678. [View Case Details] [Submit Another Request] [Main Menu]",
      "View Case Details":
        "Your case details are displayed below. [Contact Legal Specialist] [Main Menu]",
      "Contact Legal Specialist":
        "You are being connected to your assigned legal specialist. Please wait for further instructions. [Main Menu] [Cancel]",
      "Submit Another Request":
        "Let's submit another legal support request. Please provide the issue details. [Main Menu] [Cancel]",
      "View Request Status":
        "Current status: Assigned to legal specialist. [View Case Details] [Contact Legal] [Main Menu]",
      "Edit Details": "**1.** Please provide the updated details for your legal support request.\n\n---\n\n**2.** Once you update the information, I'll proceed with your request.\n\n[Submit Legal Support Request] [Cancel]",
      "Cancel": "**1.** Your legal support request has been cancelled.\n\n[Main menu] [Submit Legal Support Request]",
      "Who do I contact for urgent legal issues?":
        "For urgent legal issues, please contact the legal hotline:\n\n- **Hotline:** 1-800-LEGAL-24\n- **Email:** urgent.legal@rc.com\n\n[Contact Legal Hotline] [Main Menu] [Cancel]",
      "Contact Legal Hotline":
        "You are being connected to the legal hotline. Please wait for further instructions. [Main Menu] [Cancel]",
      "Main Menu":
        "You are now at the main menu. Please select a workflow or type your request to begin. [Start Over] [Cancel]",
    }
  },
}; 