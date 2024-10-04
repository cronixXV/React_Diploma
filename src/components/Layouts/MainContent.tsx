import { Stack, Box } from '@mui/material';
import HeaderSection from '../pages/sections/HeaderSection';
import MainSection from '../pages/sections/MainSection';
import ExperienceSection from '../pages/sections/ExperienceSection';
import AboutmeSection from '../pages/sections/AboutmeSection';
import ProjectsSection from '../pages/sections/ProjectsSection';
import TechnologiesSection from '../pages/sections/TechnologiesSection';
import JobsAndStudySection from '../pages/sections/JobsAndStudySection';
import ReviewsSection from '../pages/sections/ReviewsSection';
import ContactSection from '../pages/sections/ContactSection';
import FeedbackSection from '../pages/sections/FeedbackSection';
import FooterSection from '../pages/sections/FooterSection';

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

export default MainContent;
