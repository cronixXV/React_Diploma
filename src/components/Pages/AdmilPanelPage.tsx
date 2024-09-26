import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useRequestStore } from '../../store/RequestsStore';

export default function AdminPanelPage() {
  const requests = useRequestStore((state) => state.requests);
  const removeRequest = useRequestStore((state) => state.removeRequest);

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
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: '600px',
          marginTop: '20px',
          backgroundColor: '#ffffff80',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Описание</TableCell>
              <TableCell>Способ связи</TableCell>
              <TableCell>Удалить заявку</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.email}</TableCell>
                <TableCell>{request.description}</TableCell>
                <TableCell>{request.contactMethod}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      width: '100px',
                      height: '30px',
                      fontSize: '10px',
                      color: 'white',
                      border: '1px solid rgba(123, 74, 226, 0.5)',
                      borderRadius: '16px',
                      '&:hover': {
                        backgroundColor: '#7B4AE2',
                      },
                    }}
                    onClick={() => removeRequest(request.id)}
                  >
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
