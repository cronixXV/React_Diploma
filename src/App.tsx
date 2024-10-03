import { ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import AdminRoutes from './components/routers/routes/AdminRoutes';

import MainContent from './components/layouts/MainContent';
import { mainLandingTheme } from './theme/mainLandingTheme';

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
