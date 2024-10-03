import { ThemeProvider } from '@mui/material/styles';
import { Stack, Box } from '@mui/material';
import { mainLandingTheme } from './theme/mainLandingTheme';

import HeaderSection from './components/pages/sections/HeaderSection';
import MainSection from './components/pages/sections/MainSection';
import ExperienceSection from './components/pages/sections/ExperienceSection';
import AboutmeSection from './components/pages/sections/AboutmeSection';
import ProjectsSection from './components/pages/sections/ProjectsSection';
import TechnologiesSection from './components/pages/sections/TechnologiesSection';
import JobsAndStudySection from './components/pages/sections/JobsAndStudySection';
import ReviewsSection from './components/pages/sections/ReviewsSection';
import ContactSection from './components/pages/sections/ContactSection';
import FeedbackSection from './components/pages/sections/FeedbackSection';
import FooterSection from './components/pages/sections/FooterSection';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import AdminRoutes from './components/routers/routes/AdminRoutes';

function MainContent() {
  return (
    <Stack width={'100%'} gap={'40px'}>
      <HeaderSection />
      <Box id="main">
        <MainSection />
      </Box>
      <Box id="experience">
        <ExperienceSection />
      </Box>
      <Box id="aboutme">
        <AboutmeSection />
      </Box>
      <Box id="portfolio">
        <ProjectsSection />
      </Box>
      <Box id="technologies">
        <TechnologiesSection />
      </Box>
      <Box id="career">
        <JobsAndStudySection />
      </Box>
      <Box id="recommendations">
        <ReviewsSection />
      </Box>
      <Box id="feedback">
        <FeedbackSection />
      </Box>
      <Box id="contacts">
        <ContactSection />
      </Box>
      <FooterSection />
    </Stack>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={mainLandingTheme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/*" element={<MainContent />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
