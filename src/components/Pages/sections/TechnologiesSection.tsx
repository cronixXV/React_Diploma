import { Box, Container, Typography, Stack } from '@mui/material';

import { icons, iconsRaraly } from '../../../data/Technologies';

export default function TechnologiesSection() {
  return (
    <Container
      sx={{
        marginTop: '50px',
        width: '100%',
      }}
    >
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
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
          <Typography variant="h5">🧑‍💻 Навыки</Typography>
        </Box>

        <Box>
          <Typography
            variant="h1"
            sx={{ marginTop: '28px', whiteSpace: 'nowrap' }}
          >
            Основные технологии
          </Typography>
        </Box>

        <Stack>
          <Typography variant="h3" sx={{ marginTop: '100px' }}>
            Технологии, которыми я пользуюсь ежедневно
          </Typography>

          <Box
            mt={'40px'}
            display="flex"
            gap={{ xs: '30px', md: '20px' }}
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
          >
            {icons.map((icon) => (
              <Box key={icon.id} sx={{ width: { xs: '44px', md: '64px' } }}>
                <img src={icon.url} alt={icon.name} />
              </Box>
            ))}
          </Box>
        </Stack>

        <Stack>
          <Typography variant="h3" sx={{ marginTop: '100px' }}>
            Другие технологии, с которыми я работаю
          </Typography>

          <Box
            mt={'40px'}
            display="flex"
            gap={{ xs: '30px', md: '20px' }}
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
          >
            {iconsRaraly.map((icon) => (
              <Box
                key={icon.id}
                textAlign="center"
                sx={{ width: { xs: '38px', md: '64px' } }}
              >
                <img src={icon.url} alt={icon.name} />
              </Box>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
