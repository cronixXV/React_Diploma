import React, { useState } from 'react';

import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

import JobsAndStudyAdmin from './JobsAndStudyAdmin';
import RequestsAdmin from './RequestsAdmin';
import ProjectsAdmin from './ProjectsAdmin';
import ReviewsAdmin from './ReviewsAdmin';
import { useAuth } from '../../../ constants/useAuth';

const StyledContainer = styled(Container)(() => ({
  marginTop: '50px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledBox = styled(Box)(() => ({
  borderBottom: 2,
  borderColor: 'divider',
  marginBottom: '20px',
}));

const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTab-root': {
    color: '#ffffff80',
    fontFamily: 'Raleway',
    fontWeight: 400,
    fontSize: '16px',
    '&.Mui-selected': {
      color: '#ffffff',
    },
  },
  '& .MuiTabs-flexContainer': {
    gap: '8px',
  },
}));

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

export default function AdminPanelPage() {
  const { isAuthenticated } = useAuth();
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  if (!isAuthenticated) {
    return (
      <StyledContainer>
        <StyledTypography variant="h4" color="error">
          Доступ запрещен. Пожалуйста, введите пароль.
        </StyledTypography>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledTypography variant="h2">Панель администратора</StyledTypography>
      <StyledBox>
        <StyledTabs value={currentTab} onChange={handleTabChange}>
          <StyledTab label="Проекты" />
          <StyledTab label="Карьера" />
          <StyledTab label="Отзывы" />
          <StyledTab label="Запросы" />
        </StyledTabs>
      </StyledBox>

      {currentTab === 0 && <ProjectsAdmin />}
      {currentTab === 1 && <JobsAndStudyAdmin />}
      {currentTab === 2 && <ReviewsAdmin />}
      {currentTab === 3 && <RequestsAdmin />}
    </StyledContainer>
  );
}
