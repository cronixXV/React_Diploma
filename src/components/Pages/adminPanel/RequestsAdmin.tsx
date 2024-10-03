import { useState } from 'react';
import { useRequestStore } from '../../../store/RequestsStore';

import {
  Stack,
  Modal,
  Fade,
  Button,
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ReviewsAdmin() {
  const { requests, removeRequest } = useRequestStore();

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    id: string;
    type: 'request';
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleRemoveReview = (id: string) => {
    removeRequest(id);
    setStatusMessage('Заявка успешно удалена');
    setOpenStatus(true);
  };

  const handleOpenConfirm = (item: { id: string; type: 'request' }) => {
    setItemToDelete(item);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
    setItemToDelete(null);
  };

  const handleCloseStatus = () => {
    setOpenStatus(false);
    setStatusMessage('');
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      if (itemToDelete.type === 'request') {
        handleRemoveReview(itemToDelete.id);
      }
    }
    handleCloseConfirm();
  };

  return (
    <>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h2" mb={4}>
          Запросы
        </Typography>

        <TableContainer component={Paper} sx={{ backgroundColor: '#ffffff80' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Имя</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Описание</TableCell>
                <TableCell>Способ связи</TableCell>
                <TableCell>Время отправки</TableCell>
                <TableCell></TableCell>
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
                    {new Date(request.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() =>
                        handleOpenConfirm({ id: request.id, type: 'request' })
                      }
                    >
                      <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Modal
        open={openConfirm}
        onClose={handleCloseConfirm}
        closeAfterTransition
      >
        <Fade in={openConfirm}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              Подтверждение удаления
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Вы уверены, что хотите удалить этот элемент?
            </Typography>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 2,
                mt: 4,
              }}
            >
              <Button
                onClick={handleCloseConfirm}
                sx={{
                  backgroundColor: '#090E16',
                  color: 'white',
                  borderRadius: '16px',
                  '&:hover': {
                    backgroundColor: '#7B4AE2',
                    '& .MuiLink-root': {
                      color: '#7B4AE2',
                      '& .MuiTypography-root': {
                        color: '#7B4AE2',
                      },
                    },
                  },
                }}
              >
                Отмена
              </Button>
              <Button
                onClick={handleConfirmDelete}
                sx={{
                  backgroundColor: '#090E16',
                  color: 'white',
                  borderRadius: '16px',
                  '&:hover': {
                    backgroundColor: '#7B4AE2',
                    '& .MuiLink-root': {
                      color: '#7B4AE2',
                      '& .MuiTypography-root': {
                        color: '#7B4AE2',
                      },
                    },
                  },
                }}
              >
                Удалить
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>

      <Modal open={openStatus} onClose={handleCloseStatus} closeAfterTransition>
        <Fade in={openStatus}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              Статус удаления
            </Typography>
            <Typography sx={{ mt: 2 }}>{statusMessage}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                onClick={handleCloseStatus}
                sx={{
                  backgroundColor: '#090E16',
                  color: 'white',
                  borderRadius: '16px',
                  '&:hover': {
                    backgroundColor: '#7B4AE2',
                    '& .MuiLink-root': {
                      color: '#7B4AE2',
                      '& .MuiTypography-root': {
                        color: '#7B4AE2',
                      },
                    },
                  },
                }}
              >
                Закрыть
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
