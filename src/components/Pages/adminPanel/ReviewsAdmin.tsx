import { useState } from 'react';
import { useReviewsStore } from '../../../store/ReviewsStore';

import {
  Stack,
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  Modal,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    color: '#ffffff',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff80',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff80',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff80',
  },
  '& .MuiInputLabel-root': {
    color: '#ffffff80',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#ffffff80',
  },
  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
    color: '#ffffff80',
  },
}));

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
  const { reviews, addReview, removeReview } = useReviewsStore();

  const [newReview, setNewReview] = useState({
    id: 0,
    description: '',
    name: '',
    post: '',
    imageUrl: '',
  });

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    id: number;
    type: 'review';
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleAddReview = () => {
    addReview({ ...newReview, id: reviews.length + 1 });
    setNewReview({ id: 0, description: '', name: '', post: '', imageUrl: '' });
  };

  const handleRemoveReview = (id: number) => {
    removeReview(id);
    setStatusMessage('Обучение успешно удалено');
    setOpenStatus(true);
  };

  const handleOpenConfirm = (item: { id: number; type: 'review' }) => {
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
      if (itemToDelete.type === 'review') {
        handleRemoveReview(itemToDelete.id);
      }
    }
    handleCloseConfirm();
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
        <StyledTextField
          label="Имя"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        <StyledTextField
          label="Должность"
          value={newReview.post}
          onChange={(e) => setNewReview({ ...newReview, post: e.target.value })}
        />
        <StyledTextField
          label="Описание"
          value={newReview.description}
          onChange={(e) =>
            setNewReview({ ...newReview, description: e.target.value })
          }
        />
        <StyledTextField
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
              onClick={() =>
                handleOpenConfirm({ id: review.id, type: 'review' })
              }
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
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
    </Stack>
  );
}
