import { Box, Container, Typography, Stack } from '@mui/material';
import { useIconStore } from '../../store/TechnologiesStore';

export default function TechnologiesSection() {
  const icons = useIconStore((state) => state.icons);
  const iconsRaraly = useIconStore((state) => state.iconsRaraly);

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
          <Typography variant="h1" sx={{ marginTop: '28px' }}>
            Основные технологии
          </Typography>
        </Box>

        <Stack>
          <Typography variant="h3" sx={{ marginTop: '100px' }}>
            Технологии, которыми я пользуюсь ежедневно
          </Typography>

          <Box mt={'40px'} display="flex" gap="20px">
            {icons.map((icon) => (
              <Box key={icon.id}>
                <img src={icon.url} alt={icon.name} style={{ width: '50px' }} />
              </Box>
            ))}
          </Box>
        </Stack>

        <Stack>
          <Typography variant="h3" sx={{ marginTop: '100px' }}>
            Другие технологии, с которыми я работаю
          </Typography>

          <Box mt={'40px'} display="flex" gap="20px">
            {iconsRaraly.map((icon) => (
              <Box key={icon.id} textAlign="center">
                <img src={icon.url} alt={icon.name} style={{ width: '50px' }} />
              </Box>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
