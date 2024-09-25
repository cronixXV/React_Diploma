import { useEffect } from 'react';
import { Container, Typography, List, ListItem, Box } from '@mui/material';
import { useRequestStore } from '../../store/RequestsStore';

export default function AdmilPanelPage() {
  const requests = useRequestStore((state) => state.requests);

  useEffect(() => {
    console.log('Requests updated:', requests);
  }, [requests]);

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
      <Typography variant="h2">Панель администратора</Typography>
      <List sx={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}>
        {requests.map((request) => (
          <ListItem key={request.id} sx={{ marginBottom: '20px' }}>
            <Box>
              <Typography variant="h6">Имя: {request.name}</Typography>
              <Typography variant="body1">Email: {request.email}</Typography>
              <Typography variant="body1">
                Описание: {request.description}
              </Typography>
              <Typography variant="body1">
                Способ связи: {request.contactMethod}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
