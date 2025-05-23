import { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from '@mui/material';
import {
  LockReset,
  Help,
  Security,
  ExpandMore,
  ExpandLess,
  Group,
  Person,
  Apps,
  Assessment,
  Support,
  Business,
  Flight,
  Work,
  Description,
  AccountBalance,
  ContactSupport,
  People,
  CardTravel,
  Receipt,
} from '@mui/icons-material';

const DRAWER_WIDTH = 280;

interface SidebarProps {
  selectedWorkflow: string;
  setSelectedWorkflow: (workflow: string) => void;
  style?: React.CSSProperties;
}

export default function Sidebar({ selectedWorkflow, setSelectedWorkflow }: SidebarProps) {
  const [openSection, setOpenSection] = useState<'IT & NOC' | 'HR' | 'Travel Desk'>('IT & NOC');

  const workflows = {
    'IT & NOC': {
      open: openSection === 'IT & NOC',
      items: [
        { id: 'password-reset', label: 'Password Reset', icon: <LockReset /> },
        { id: 'unlock-account', label: 'Unlock Account', icon: <Security /> },
        { id: 'request-software', label: 'Request Software', icon: <Apps /> },
        { id: 'group-management', label: 'Group Management', icon: <Group /> },
        { id: 'user-provisioning', label: 'User Provisioning', icon: <Person /> },
        { id: 'app-registration', label: 'App Registration', icon: <Apps /> },
        { id: 'audit-logs', label: 'Audit Logs', icon: <Assessment /> },
        { id: 'help-support', label: 'Help & Support', icon: <Support /> },
      ],
    },
    'HR': {
      open: openSection === 'HR',
      items: [
        { id: 'leave-request', label: 'Leave Request', icon: <Work /> },
        { id: 'payslip-download', label: 'Payslip Download', icon: <Description /> },
        { id: 'update-personal-info', label: 'Update Personal Info', icon: <Person /> },
        { id: 'hr-helpdesk', label: 'HR Helpdesk', icon: <ContactSupport /> },
        { id: 'resource-onboarding', label: 'Resource Onboarding', icon: <People /> },
      ],
    },
    'Travel Desk': {
      open: openSection === 'Travel Desk',
      items: [
        { id: 'travel-request', label: 'Travel Request', icon: <CardTravel /> },
        { id: 'visa-processing', label: 'Visa Processing', icon: <Flight /> },
        { id: 'travel-booking', label: 'Travel Booking', icon: <Business /> },
        { id: 'travel-approval', label: 'Travel Approval', icon: <Description /> },
        { id: 'travel-expenses', label: 'Travel Expenses', icon: <Receipt /> },
      ],
    },
  };

  return (
    <Box
      sx={{
        width: DRAWER_WIDTH,
        background: '#f5f7fb',
        color: '#222',
        borderRight: 'none',
        borderRadius: '18px',
        margin: '16px 0 16px 12px',
        boxShadow: '0 4px 24px rgba(74,108,247,0.08)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      <Divider sx={{ bgcolor: '#e0e7ef', mb: 1 }} />
      <List sx={{ px: 2 }}>
        {Object.entries(workflows).map(([section, { open, items }]) => (
          <Box key={section}>
            <ListItemButton
              onClick={() => setOpenSection(section as 'IT & NOC' | 'HR' | 'Travel Desk')}
              sx={{
                borderRadius: '8px',
                mb: 0.5,
                '&:hover': { background: 'rgba(74,108,247,0.08)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: '#4a6cf7' }}>
                {section === 'IT & NOC' ? <Security /> : section === 'HR' ? <Work /> : <CardTravel />}
              </ListItemIcon>
              <ListItemText
                primary={section}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {items.map((item) => (
                  <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton
                      selected={selectedWorkflow === item.id}
                      onClick={() => setSelectedWorkflow(item.id)}
                      sx={{
                        borderRadius: '8px',
                        pl: 4,
                        '&.Mui-selected': {
                          background: 'rgba(74,108,247,0.12)',
                          '&:hover': { background: 'rgba(74,108,247,0.16)' },
                        },
                        '&:hover': { background: 'rgba(74,108,247,0.08)' },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40, color: '#4a6cf7' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                          fontWeight: selectedWorkflow === item.id ? 600 : 400,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );
} 