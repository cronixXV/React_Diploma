// import { ThemeProvider } from '@mui/material/styles';
// import { Stack, Box } from '@mui/material';
// import { mainLandingTheme } from './theme/mainLandingTheme';
// import HeaderSection from './components/Pages/HeaderSection';
// import MainSection from './components/Pages/MainSection';
// import ExperienceSection from './components/Pages/ExperienceSection';
// import AboutmeSection from './components/Pages/AboutmeSection';
// import ProjectsSection from './components/Pages/ProjectsSection';
// import TechnologiesSection from './components/Pages/TechnologiesSection';
// import JobsAndStudySection from './components/Pages/JobsAndStudySection';
// import ReviewsSection from './components/Pages/ReviewsSection';
// import ContactSection from './components/Pages/ContactSection';
// import FeedbackSection from './components/Pages/FeedbackSection';
// import FooterSection from './components/Pages/FooterSection';

// function App() {
//   return (
//     <ThemeProvider theme={mainLandingTheme}>
//       <Stack width={'100%'} gap={'40px'}>
//         <HeaderSection />
//         <Box id="main">
//           <MainSection />
//         </Box>
//         <Box id="experience">
//           <ExperienceSection />
//         </Box>
//         <Box id="aboutme">
//           <AboutmeSection />
//         </Box>
//         <Box id="portfolio">
//           <ProjectsSection />
//         </Box>
//         <Box id="technologies">
//           <TechnologiesSection />
//         </Box>
//         <Box id="career">
//           <JobsAndStudySection />
//         </Box>
//         <Box id="recommendations">
//           <ReviewsSection />
//         </Box>
//         <Box id="contacts">
//           <ContactSection />
//         </Box>
//         <Box id="feedback">
//           <FeedbackSection />
//         </Box>
//         <FooterSection />
//       </Stack>
//     </ThemeProvider>
//   );
// }

// export default App;

import { ThemeProvider } from '@mui/material/styles';
import { Stack, Box } from '@mui/material';
import { mainLandingTheme } from './theme/mainLandingTheme';
import HeaderSection from './components/Pages/HeaderSection';
import MainSection from './components/Pages/MainSection';
import ExperienceSection from './components/Pages/ExperienceSection';
import AboutmeSection from './components/Pages/AboutmeSection';
import ProjectsSection from './components/Pages/ProjectsSection';
import TechnologiesSection from './components/Pages/TechnologiesSection';
import JobsAndStudySection from './components/Pages/JobsAndStudySection';
import ReviewsSection from './components/Pages/ReviewsSection';
import ContactSection from './components/Pages/ContactSection';
import FeedbackSection from './components/Pages/FeedbackSection';
import FooterSection from './components/Pages/FooterSection';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanelPage from './components/Pages/AdmilPanelPage';

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
      <Box id="contacts">
        <ContactSection />
      </Box>
      <Box id="feedback">
        <FeedbackSection />
      </Box>
      <FooterSection />
    </Stack>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={mainLandingTheme}>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPanelPage />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
