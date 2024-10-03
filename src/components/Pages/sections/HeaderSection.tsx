import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPasswordModal from '../modals/AdminPasswordModal';

import {
  Stack,
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../../media/icons/others/Logo.svg';

export default function HeaderSection() {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleLoginSuccess = () => {
    navigate('/admin');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { label: 'Главная', id: 'main' },
    { label: 'Обо мне', id: 'aboutme' },
    { label: 'Портфолио', id: 'portfolio' },
    { label: 'Навыки', id: 'technologies' },
    { label: 'Карьера', id: 'career' },
    { label: 'Рекомендации', id: 'recommendations' },
    { label: 'Обратная связь', id: 'feedback' },
    { label: 'Контакты', id: 'contacts' },
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: 1001,
          paddingTop: '20px',
        }}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          sx={{
            minHeight: '64px',
            width: '100%',
            backgroundColor: 'rgba(123, 74, 226, 0.05)',
            borderRadius: '16px',
          }}
        >
          <Box onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img
              src={Logo}
              style={{
                paddingLeft: '24px',
              }}
              alt="Logo"
            />
          </Box>

          <IconButton
            edge="end"
            sx={{
              display: { xs: 'flex', md: 'none' },
              marginLeft: 'auto',
              paddingRight: '24px',
            }}
            onClick={toggleMenu}
          >
            <MenuIcon sx={{ color: '#ffffff80' }} />
          </IconButton>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: '100%',
              justifyContent: 'flex-end',
              paddingRight: '24px',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <List sx={{ display: 'flex', flexDirection: 'row' }}>
              {sections.map(({ label, id }) => (
                <ListItem
                  key={id}
                  onClick={() => handleScroll(id)}
                  sx={{ cursor: 'pointer' }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: isSmallScreen ? '15px' : '18px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {label}{' '}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Stack>

          <Drawer
            anchor="top"
            open={menuOpen}
            onClose={toggleMenu}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: '#090E16',
              },
            }}
          >
            <Box sx={{ width: 250, padding: '16px' }}>
              <IconButton onClick={toggleMenu}>
                <CloseIcon sx={{ color: '#ffffff80' }} />
              </IconButton>
              <List>
                {sections.map(({ label, id }) => (
                  <ListItem
                    key={id}
                    onClick={() => {
                      handleScroll(id);
                      toggleMenu();
                    }}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Typography variant="h4">{label}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Stack>
      </header>

      <AdminPasswordModal
        open={modalOpen}
        onClose={handleModalClose}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
}
