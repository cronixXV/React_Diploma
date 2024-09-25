import { Stack, Box, Typography, List, ListItem, Link } from '@mui/material';
import Logo from '../../media/icons/others/Logo.svg';

export default function HeaderSection() {
  return (
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
        <Box>
          <img
            src={Logo}
            style={{
              paddingLeft: '24px',
            }}
            alt="Logo"
          />
        </Box>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: '100%',
            justifyContent: 'flex-end',
            paddingRight: '24px',
          }}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <ListItem component={Link} href="#main">
              <Typography variant="h4">Главная</Typography>
            </ListItem>
            <ListItem component={Link} href="#aboutme">
              <Typography variant="h4">Обо мне</Typography>
            </ListItem>
            <ListItem component={Link} href="#portfolio">
              <Typography variant="h4">Портфолио</Typography>
            </ListItem>
            <ListItem component={Link} href="#technologies">
              <Typography variant="h4">Навыки</Typography>
            </ListItem>
            <ListItem component={Link} href="#career">
              <Typography variant="h4">Карьера</Typography>
            </ListItem>
            <ListItem component={Link} href="#recommendations">
              <Typography variant="h4">Рекомендации</Typography>
            </ListItem>
            <ListItem component={Link} href="#contacts">
              <Typography variant="h4">Контакты</Typography>
            </ListItem>
            <ListItem component={Link} href="#feedback">
              <Typography variant="h4">Обратная связь</Typography>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </header>
  );
}
