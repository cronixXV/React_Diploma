import { useState } from 'react';
import { useReviewsStore } from '../../../store/ReviewsStore';

import {
  Stack,
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import ConfirmModal from '../modals/AdminConfirmModal';

export default function ReviewsAdmin() {
  const { reviews, addReview, removeReview } = useReviewsStore();

  const [newReview, setNewReview] = useState({
    id: 0,
    description: '',
    name: '',
    post: '',
    imageUrl: '',
  });

  const [openConfirm, setOpenConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const handleAddReview = () => {
    addReview({ ...newReview, id: reviews.length + 1 });
    setNewReview({ id: 0, description: '', name: '', post: '', imageUrl: '' });
  };

  const handleOpenConfirm = (id: number) => {
    setItemToDelete(id);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
    setItemToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete !== null) {
      removeReview(itemToDelete);
      setOpenConfirm(false);
    }
  };

  return (
    <Stack sx={{ padding: '20px' }}>
      <Typography variant="h2">Отзывы</Typography>

      <Stack
        sx={{ width: '50%', marginTop: '20px', gap: '20px', margin: '0 auto' }}
      >
        <Typography variant="h3" mt={4} mb={4}>
          Добавить новый отзыв:
        </Typography>
        <TextField
          className="adminTextField"
          label="Имя"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        <TextField
          className="adminTextField"
          label="Должность"
          value={newReview.post}
          onChange={(e) => setNewReview({ ...newReview, post: e.target.value })}
        />
        <TextField
          className="adminTextField"
          label="Описание"
          value={newReview.description}
          onChange={(e) =>
            setNewReview({ ...newReview, description: e.target.value })
          }
        />
        <TextField
          className="adminTextField"
          label="URL изображения"
          value={newReview.imageUrl}
          onChange={(e) =>
            setNewReview({ ...newReview, imageUrl: e.target.value })
          }
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            onClick={handleAddReview}
            sx={{
              '&:hover': {
                borderColor: '#7B4AE2',
                '& .MuiLink-root': {
                  color: '#7B4AE2',
                  '& .MuiTypography-root': {
                    color: '#7B4AE2',
                  },
                },
              },
            }}
          >
            Добавить отзыв
          </Button>
        </Box>
      </Stack>

      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h3">Текущие отзывы</Typography>
        {reviews.map((review) => (
          <Box
            key={review.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              backgroundColor: '#ffffff80',
              padding: '10px',
              marginTop: '10px',
              borderRadius: '4px',
            }}
          >
            <Box>
              <Typography variant="h6">{review.name}</Typography>
              <Typography>{review.post}</Typography>
              <Typography>{review.description}</Typography>
            </Box>
            <IconButton
              onClick={() => handleOpenConfirm(review.id)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      <ConfirmModal
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Подтверждение удаления"
        description="Вы уверены, что хотите удалить этот отзыв?"
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
      </ConfirmModal>
    </Stack>
  );
}
