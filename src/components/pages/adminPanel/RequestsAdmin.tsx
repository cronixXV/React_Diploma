import { useState } from 'react';
import { useRequestStore } from '../../../store/RequestsStore';

import {
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

import AdminConfirmModal from '../modals/AdminConfirmModal';

export default function ReviewsAdmin() {
  const { requests, removeRequest } = useRequestStore();

  const [openConfirm, setOpenConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    id: string;
    type: 'request';
  } | null>(null);

  const handleRemoveReview = (id: string) => {
    removeRequest(id);
    setOpenConfirm(false);
    setItemToDelete(null);
  };

  const handleOpenConfirm = (item: { id: string; type: 'request' }) => {
    setItemToDelete(item);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
    setItemToDelete(null);
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

      <AdminConfirmModal
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Подтверждение удаления"
        description="Вы уверены, что хотите удалить этот элемент?"
      >
        <Button
          onClick={handleCloseConfirm}
          sx={{
            backgroundColor: '#090E16',
            color: 'white',
            borderRadius: '16px',
            '&:hover': {
              backgroundColor: '#7B4AE2',
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
            },
          }}
        >
          Удалить
        </Button>
      </AdminConfirmModal>
    </>
  );
}
