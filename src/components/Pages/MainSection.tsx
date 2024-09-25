import Grid2 from '@mui/material/Grid2';
import { Box, Container, Typography, Stack, Link } from '@mui/material';

import GitHub from '../../media/icons/contact/github.svg';
import Avatar from '../../media/icons/me/AvatarAndIcons.svg';
import ArrowDown from '../../media/icons/others/ArrowLineDown.svg';
import { SiTelegram } from 'react-icons/si';
import { FaSquareGitlab } from 'react-icons/fa6';

export default function MainSection() {
  return (
    <Container
      sx={{
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          minHeight: 'calc(100vh - 50px)',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack sx={{ alignItems: 'flex-start' }}>
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
                Егор <br /> Груздев
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
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: '555px', height: '600px' }}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack sx={{ alignItems: 'flex-end' }}>
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
                    fontSize: '16px',
                  }}
                >
                  Скачать резюме
                </Typography>
                <img
                  src={ArrowDown}
                  alt="Arrow Down"
                  style={{ marginLeft: '8px' }}
                />
              </Link>
            </Box>

            <Stack
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(123, 74, 226, 0.5)',
                borderRadius: '16px',
                width: '253px',
                height: '44px',
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
                    fontSize: '16px',
                  }}
                >
                  Написать в телеграм
                </Typography>

                <SiTelegram
                  size={22}
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
