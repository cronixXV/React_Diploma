import Grid2 from '@mui/material/Grid2';
import {
  Box,
  Container,
  Typography,
  Stack,
  useMediaQuery,
} from '@mui/material';

import { mainLandingTheme } from '../../../theme/mainLandingTheme';
import Avatar from '../../../media/icons/me/AvatarAndIcons.svg';

export default function AboutmeSection() {
  const isLargeScreen = useMediaQuery(mainLandingTheme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(mainLandingTheme.breakpoints.down('md'));

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
        <Grid2 size={{ xs: 12, lg: 6 }}>
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

        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Stack
            sx={{
              alignItems: { xs: 'center', lg: 'flex-start' },
              width: '100%',
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

            <Stack
              sx={{
                alignItems: { xs: 'center', lg: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1" mt={{ xs: 2, lg: 0 }}>
                Егор {!isLargeScreen && <br />} Груздев
              </Typography>
              ""
              <Typography variant="subtitle1">
                👋 Привет! Можешь написать мне.{isSmallScreen && <br />} С
                удовольствием проконсультирую!
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                sx={{ whiteSpace: { xs: 'none', lg: 'nowrap' } }}
              >
                👨‍💻 Более 2 лет разрабатываю интерфейсы {isSmallScreen && <br />}{' '}
                на JavaScript, React.js и Typescript.
              </Typography>
              {isSmallScreen && <br />}
              <Typography variant="subtitle1">
                💡 Интересуюсь веб-разработкой на JavaScript,{' '}
                {isSmallScreen && <br />} TypeScript, React.js.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                🚀 Постоянно развиваюсь и каждый день {isSmallScreen && <br />}{' '}
                стараюсь становиться лучше.
              </Typography>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
    </Container>
  );
}
