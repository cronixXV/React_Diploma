import { Stack, ThemeProvider } from '@mui/material';
import { mainLandingTheme } from '../../theme/mainLandingTheme';
import Header from '../pages/sections/HeaderSection';

export default function MainLayout() {
  return (
    <ThemeProvider theme={mainLandingTheme}>
      <Stack
        sx={{
          minHeight: '100vh',
          width: '100%',
          position: 'relative',
        }}
        direction={'column'}
        gap={'35px'}
      >
        <Header />
      </Stack>
    </ThemeProvider>
  );
}
