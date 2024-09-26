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

        <Typography variant="h1" sx={{ marginTop: '28px' }}>
          Траектория развития
        </Typography>
      </Stack>

      <Stack
        sx={{
          justifyContent: 'center',
          width: '100%',
          marginTop: '50px',
        }}
      >
        <Grid2 container spacing={4} sx={{ width: '100%' }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h2">Мои работы</Typography>

            <Typography variant="h3" mt={'8px'}>
              2024 · Настоящее время
            </Typography>
            {jobs.map((job, index) => (
              <Card
                key={index}
                sx={{
                  width: '540px',
                  height: '220px',
                  mt: '64px',
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
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h2">Мое обучение</Typography>
            <Typography variant="h3" mt={'8px'}>
              2021 · Настоящее время
            </Typography>
            {studies.map((study, index) => (
              <Card
                key={index}
                sx={{
                  width: '540px',
                  height: '220px',
                  mt: '64px',
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
          </Grid2>
        </Grid2>
      </Stack>
    </Container>
  );
}
