import { Box, Container, Typography, Stack, Link } from '@mui/material';

import { SiTelegram } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export default function FooterSection() {
  return (
    <Container
      sx={{
        minHeight: '88px',
        minWidth: '100%',
        margin: '0 !important',
        backgroundColor: 'rgba(123, 74, 226, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px 0',
      }}
    >
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        alignItems="center"
        sx={{ width: '100%', maxWidth: '1200px', position: 'relative' }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 'calc(50% + 10px)', lg: 'calc(30% - 10px)' },
            flexGrow: 1,
          }}
        >
          <Typography variant="subtitle1">
            Сайт-портфолио© Груздев Егор · 2024
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          sx={{
            position: 'absolute',
            top: { xs: 'calc(50% - 30px)', lg: 'calc(30% - 10px)' },
            left: '50%',
            transform: 'translateX(-50%)',
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
            href="mailto:egruzdev14@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={32} color="gray" />
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
