import Grid2 from '@mui/material/Grid2';
import { Box, Container, Typography, Stack } from '@mui/material';
import CodeIcon from '../../media/icons/others/CodeIcon.svg';
import ProjectIcon from '../../media/icons/projects/ProjectsIcon.svg';
import DesignIcon from '../../media/icons/design/DesignIcon2.svg';

export default function ExperienceSection() {
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
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack
            sx={{
              width: '246px',
              height: '200px',
              border: '1px solid rgba(123, 74, 226, 0.5)',
              borderRadius: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              '&:hover': {
                backgroundColor: 'rgba(123, 74, 226, 0.10)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={CodeIcon} alt="CodeIcon" />
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'center',
                  color: '#fff',
                }}
              >
                3 года
              </Typography>
              <Typography variant="h2">Разработчик</Typography>
            </Box>
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack
            sx={{
              width: '246px',
              height: '200px',
              border: '1px solid rgba(123, 74, 226, 0.5)',
              borderRadius: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              '&:hover': {
                backgroundColor: 'rgba(123, 74, 226, 0.10)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={ProjectIcon} alt="ProjectIcon" />
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'center',
                  color: '#fff',
                }}
              >
                3 года
              </Typography>
              <Typography variant="h2">В ИТ сфере</Typography>
            </Box>
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack
            sx={{
              width: '246px',
              height: '200px',
              border: '1px solid rgba(123, 74, 226, 0.5)',
              borderRadius: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              '&:hover': {
                backgroundColor: 'rgba(123, 74, 226, 0.10)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={DesignIcon} alt="DesignIcon" />
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'center',
                  color: '#fff',
                }}
              >
                2 года
              </Typography>
              <Typography variant="h2">Фрилансер</Typography>
            </Box>
          </Stack>
        </Grid2>

        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '16px',
            width: '90%',
            height: '110px',
            gap: '80px',
            background: 'rgba(123, 74, 226, 0.1)',
            marginTop: '32px',
          }}
        >
          <Box sx={{ width: '33%' }}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: 'center',
                color: '#7B4AE2',
              }}
            >
              Веб-разработчик
            </Typography>
            <Typography variant="h2" color="#7B4AE2">
              Front-end
            </Typography>
          </Box>

          <Box sx={{ width: '33%' }}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: 'center',
                color: '#7B4AE2',
              }}
            >
              Десятки проектов
            </Typography>
            <Typography variant="h2" color="#7B4AE2">
              TS/JS
            </Typography>
          </Box>

          <Box sx={{ width: '33%' }}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: 'center',
                color: '#7B4AE2',
              }}
            >
              Фрилансер
            </Typography>
            <Typography variant="h2" color="#7B4AE2">
              UI · UX
            </Typography>
          </Box>
        </Stack>
      </Grid2>
    </Container>
  );
}
