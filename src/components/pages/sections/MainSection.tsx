import Grid2 from '@mui/material/Grid2';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  useMediaQuery,
} from '@mui/material';

import GitHub from '../../../media/icons/contact/github.svg';
import Avatar from '../../../media/icons/me/AvatarAndIcons.svg';
import ArrowDown from '../../../media/icons/others/ArrowLineDown.svg';
import { SiTelegram } from 'react-icons/si';
import { FaSquareGitlab } from 'react-icons/fa6';
import { mainLandingTheme } from '../../../theme/mainLandingTheme';

export default function MainSection() {
  const isLargeScreen = useMediaQuery(mainLandingTheme.breakpoints.down('lg'));
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          minHeight: 'calc(100vh - 100px)',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <Stack sx={{ alignItems: { xs: 'center', lg: 'flex-start' } }}>
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
              <Typography variant="h5">👋 Привет!</Typography>
            </Box>

            <Box
              sx={{
                marginTop: '24px',
              }}
            >
              <Typography variant="h1">
                Егор {!isLargeScreen && <br />} Груздев
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: '24px',
              }}
            >
              <Typography variant="h3">
                Веб-разработчик · UI дизайнер
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: '24px',
                display: 'flex',
                gap: '16px',
              }}
            >
              <Link
                href="https://t.me/cronix_xv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTelegram size={32} color="gray" />
              </Link>

              <Link
                href="https://github.com/cronixXV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="GitHub" />
              </Link>

              <Link
                href="https://gitlab.com/soviet_onion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareGitlab size={32} color="gray" />
              </Link>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: { xs: '285px', sm: '400px', md: '555px', lg: '555px' },
                height: { xs: '308px', sm: '440px', md: '600px', lg: '600px' },
              }}
            >
              <img
                src={Avatar}
                alt="Avatar"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <Stack sx={{ alignItems: { xs: 'center', lg: 'flex-end' } }}>
            <Box mb={'9px'}>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  position: 'relative',
                  color: 'rgba(123, 74, 226, 0.5)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    color: '#ffffff80',
                    '& .MuiTypography-root': {
                      fontWeight: 700,
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    fontSize: { lg: '16px', md: '28px' },
                  }}
                >
                  Скачать резюме
                </Typography>
                <Box
                  sx={{
                    display: { lg: 'initial', md: 'none' },
                  }}
                >
                  <img
                    src={ArrowDown}
                    alt="Arrow Down"
                    style={{
                      marginLeft: '8px',
                    }}
                  />
                </Box>
              </Link>
            </Box>

            <Stack
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(123, 74, 226, 0.5)',
                borderRadius: { lg: '16px', md: '24px', sm: '12px', xs: '8px' },
                width: { lg: '253px', md: '400px', sm: '240px', xs: '220px' },
                height: { lg: '44px', md: '78px', sm: '40px', xs: '35px' },
                '&:hover': {
                  borderColor: '#7B4AE2',
                  '& .MuiLink-root': {
                    color: '#7B4AE2',
                    '& .MuiTypography-root': {
                      color: '#7B4AE2',
                    },
                    '& svg': {
                      color: '#7B4AE2',
                    },
                  },
                },
              }}
            >
              <Link
                href="https://t.me/cronix_xv"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'rgba(123, 74, 226, 0.5)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    fontSize: { lg: '16px', md: '28px' },
                  }}
                >
                  Написать в телеграм
                </Typography>

                <SiTelegram
                  size={isLargeScreen ? 28 : 22}
                  color="rgba(123, 74, 226, 0.5)"
                  style={{ marginLeft: '8px' }}
                />
              </Link>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
    </Container>
  );
}
