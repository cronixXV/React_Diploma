import Grid2 from '@mui/material/Grid2';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Card,
  CardContent,
} from '@mui/material';

import { useProjectStore } from '../../../store/ProjectStore';

export default function ProjectsSection() {
  const projects = useProjectStore((state) => state.projects);

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
      <Stack sx={{ width: '100%', maxWidth: '1200px' }}>
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
          <Typography variant="h5">🔗 Портфолио</Typography>
        </Box>

        <Typography variant="h1" sx={{ marginTop: '28px' }}>
          Проекты
        </Typography>
      </Stack>

      <Stack
        sx={{
          justifyContent: 'center',
          width: '100%',
          marginTop: '50px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            overflowX: { xs: 'auto', md: 'unset' },
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Grid2
            container
            spacing={{ xs: 4, md: 8, lg: 2 }}
            sx={{
              flexWrap: { xs: 'nowrap', md: 'wrap' },
            }}
          >
            {projects.map((project) => (
              <Grid2
                key={project.id}
                size={{ xs: 12, md: 6, lg: 4 }}
                sx={{
                  minWidth: { xs: '300px', md: 'auto' },
                  flexShrink: 0,
                }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card
                    sx={{
                      width: { xs: '300px', lg: '340px' },
                      height: { xs: '371px', sm: '410px', lg: '440px' },
                      '&:hover': {
                        backgroundColor: 'rgba(123, 74, 226, 0.10)',
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" color="#fff" whiteSpace={'wrap'}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ mt: '10px', whiteSpace: 'wrap' }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>

                    <Stack
                      flexDirection="row"
                      gap="10px"
                      sx={{
                        mt: 2,
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <Box
                          key={tech}
                          sx={{
                            width: '106px',
                            height: '30px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(123, 74, 226, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                              backgroundColor: 'rgba(74, 226, 144, 0.3)',
                              '& .MuiTypography-root': {
                                color: '#4AE290',
                              },
                            },
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: '16px',
                            }}
                          >
                            {tech}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Box
                      sx={{
                        mt: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        img: {
                          width: {
                            xs: '292px',
                            md: '300px',
                            lg: '360px',
                          },
                          height: 'auto',
                        },
                      }}
                    >
                      <img src={project.imageUrl} alt={project.title} />
                    </Box>
                  </Card>
                </Link>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Stack>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
          marginTop: '50px',
        }}
      >
        <Link
          href="https://github.com/cronixXV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography
            sx={{
              fontFamily: 'Raleway',
              fontWeight: 600,
              fontSize: '20px',
              textDecoration: 'underline',
              textDecorationSkipInk: 'none',
              color: 'rgba(123, 74, 226, 0.5)',
            }}
          >
            Больше проектов на GitHub
          </Typography>
        </Link>
      </Box>
    </Container>
  );
}
