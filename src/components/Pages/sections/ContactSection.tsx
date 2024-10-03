import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  useMediaQuery,
} from '@mui/material';
import { mainLandingTheme } from '../../../theme/mainLandingTheme';

import { SiTelegram } from 'react-icons/si';
import Email from '../../../media/icons/contact/email.svg';
import Copy from '../../../media/icons/contact/CopySimple.svg';
import ArrowUp from '../../../media/icons/others/ArrowUp.svg';

export default function ContactSection() {
  const isSmallScreen = useMediaQuery(mainLandingTheme.breakpoints.down('md'));

  let size = 22;
  if (isSmallScreen) {
    size = 17;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container sx={{ marginTop: '50px', width: '100%' }}>
      <Stack sx={{ width: '100%', alignItems: 'center' }}>
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
          <Typography variant="h5">📬 Контакты</Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            marginTop: '28px',
            fontSize: { xs: '34px', md: '43px', lg: '48px' },
            textAlign: 'center',
          }}
        >
          Пишите на почту или{isSmallScreen && <br />} в Telegram!
        </Typography>
      </Stack>

      <Stack mt={'111px'} sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: {
              xs: 'calc(50% - 75px)',
              md: 'calc(45% + 10px)',
              lg: 'calc(24% + 10px)',
            },
            left: {
              xs: 'calc(50% - 90px)',
              md: 'calc(15% - 35px)',
              lg: 'calc(24% + 10px)',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(123, 74, 226, 0.5)',
            borderRadius: { xs: '8px', md: '16px' },
            width: { xs: '178px', md: '253px' },
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
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              Написать в Telegram
            </Typography>

            <SiTelegram
              size={size}
              color="rgba(123, 74, 226, 0.5)"
              style={{ marginLeft: '8px' }}
            />
          </Link>
        </Box>
      </Stack>

      <Stack sx={{ position: 'relative' }}>
        <Link
          href="mailto:egruzdev14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 'calc(25% - 10px)', md: 'calc(15% - 60px)' },
              left: { xs: 'calc(50% - 105px)', md: 'calc(50% + 10px)' },
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img src={Email} alt="Email" />

            <Typography variant="h5" sx={{ fontWeight: 400, mt: '8px' }}>
              Почта:
            </Typography>

            <Typography
              variant="h5"
              sx={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.5)' }}
            >
              egruzdev14@gmail.com
            </Typography>

            <img src={Copy} alt="Copy" style={{ marginTop: '8px' }} />
          </Box>
        </Link>
      </Stack>

      <Box
        sx={{
          marginTop: '150px',
          display: 'flex',
          justifyContent: 'center',
          direction: 'row',
          cursor: 'pointer',
        }}
        onClick={scrollToTop}
      >
        <Typography variant="h5" fontWeight={600} mr={1}>
          Наверх
        </Typography>
        <img src={ArrowUp} alt="ArrowUp" />
      </Box>
    </Container>
  );
}
