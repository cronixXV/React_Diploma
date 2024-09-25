import Grid2 from '@mui/material/Grid2';
import { Box, Container, Typography, Stack } from '@mui/material';

import Avatar from '../../media/icons/me/AvatarAndIcons.svg';

export default function AboutmeSection() {
  return (
    <Container
      sx={{
        marginTop: '50px',
      }}
    >
      <Grid2
        container
        sx={{
          width: '100%',
        }}
      >
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              marginTop: '-70px',
            }}
          >
            <img
              src={Avatar}
              alt=""
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <Stack
            sx={{
              alignItems: 'flex-start',
            }}
          >
            <Box
              sx={{
                borderRadius: '16px',
                width: '160px',
                height: '45px',
                background: 'rgba(123, 74, 226, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5">🧐 Обо мне</Typography>
            </Box>

            <Box>
              <Typography variant="h1">
                Егор <br /> Груздев
              </Typography>
              ""
              <Typography variant="subtitle1">
                👋 Привет! Можешь написать мне. С удовольствием проконсультирую!
              </Typography>
              <br />
              <Typography variant="subtitle1" sx={{ whiteSpace: 'nowrap' }}>
                👨‍💻 Более 2 лет разрабатываю интерфейсы на JavaScript, React.js и
                Typescript.
              </Typography>
              <Typography variant="subtitle1">
                💡 Интересуюсь веб-разработкой на JavaScript, TypeScript,
                React.js и UX/UI.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                🚀 Постоянно развиваюсь и каждый день стараюсь становиться
                лучше.
              </Typography>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>
    </Container>
  );
}
