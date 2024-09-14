import { ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { mainLandingTheme } from './theme/mainLandingTheme';
import HeaderSection from './components/Pages/HeaderSection';

function App() {
  return (
    <ThemeProvider theme={mainLandingTheme}>
      <Stack width={'100%'} gap={'40px'}>
        <HeaderSection />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
