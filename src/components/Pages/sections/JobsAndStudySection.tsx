import Grid2 from '@mui/material/Grid2';
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Link,
} from '@mui/material';

import { useJobsAndStudyStore } from '../../../store/JobsAndStudyStore';

export default function JobsAndStudySection() {
  const { jobs, studies } = useJobsAndStudyStore();

  return (
    <Container
      sx={{
        marginTop: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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
          <Typography variant="h5">💼 Карьера</Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{ marginTop: '28px', whiteSpace: 'nowrap' }}
        >
          Траектория развития
        </Typography>
      </Stack>

      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: '50px',
        }}
      >
        <Grid2
          container
          spacing={{ xs: 2, md: 2, lg: 2 }}
          sx={{ width: '100%' }}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h2">Мои работы</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h3" mt={'8px'}>
                2024 · Настоящее время
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: 'flex', md: 'block' },
                overflowX: { xs: 'auto', md: 'unset' },
                gap: '20px',
                padding: { xs: '20px', md: 0 },
                justifyContent: { xs: 'flex-start', md: 'initial' },
                scrollSnapType: { xs: 'x mandatory', md: 'none' },
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  sx={{
                    flexShrink: 0,
                    scrollSnapAlign: { xs: 'start', md: 'none' },
                    width: { xs: '280px', md: '285px', lg: '545px' },
                    height: { xs: '330px', md: '410px', lg: '220px' },
                    mt: { xs: '0px', md: '64px' },
                    '&:hover': {
                      backgroundColor: 'rgba(123, 74, 226, 0.10)',
                    },
                  }}
                >
                  <CardContent>
                    <Link href={job.url} target="_blank" underline="none">
                      <Typography
                        variant="h5"
                        color="white"
                        textAlign={'start'}
                        sx={{
                          '&:hover': {
                            fontWeight: 800,
                          },
                        }}
                      >
                        {job.title}
                      </Typography>
                    </Link>
                    <Typography variant="subtitle1" mt={'8px'}>
                      {job.description}
                    </Typography>
                    <Typography
                      variant="h5"
                      mt={'40px'}
                      fontWeight={400}
                      textAlign={'end'}
                    >
                      {job.date}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h2">Мое обучение</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h3" mt={'8px'}>
                2021 · Настоящее время
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: 'flex', md: 'block' }, //
                overflowX: { xs: 'auto', md: 'unset' },
                gap: '20px',
                padding: { xs: '20px', md: 0 },
                justifyContent: { xs: 'flex-start', md: 'initial' },
                scrollSnapType: { xs: 'x mandatory', md: 'none' },
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {studies.map((study, index) => (
                <Card
                  key={index}
                  sx={{
                    flexShrink: 0,
                    scrollSnapAlign: { xs: 'start', md: 'none' },
                    width: { xs: '280px', md: '285px', lg: '545px' },
                    height: { xs: '330px', md: '410px', lg: '220px' },
                    mt: { xs: '0px', md: '64px' },
                    '&:hover': {
                      backgroundColor: 'rgba(123, 74, 226, 0.10)',
                    },
                  }}
                >
                  <CardContent>
                    <Link href={study.url} target="_blank" underline="none">
                      <Typography
                        variant="h5"
                        color="white"
                        textAlign={'start'}
                        sx={{
                          '&:hover': {
                            fontWeight: 800,
                          },
                        }}
                      >
                        {study.title}
                      </Typography>
                    </Link>
                    <Typography variant="subtitle1" mt={'8px'}>
                      {study.description}
                    </Typography>
                    <Typography
                      variant="h5"
                      mt={'40px'}
                      fontWeight={400}
                      textAlign={'end'}
                    >
                      {study.date}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Stack>
    </Container>
  );
}
