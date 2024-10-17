import {
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { useState } from 'react';
import { z } from 'zod';
import { useRequestStore } from '../../../store/RequestsStore';

const formSchema = z.object({
  name: z.string().min(3, 'Имя обязательно'),
  email: z.string().email('Неверный формат email'),
  description: z.string().optional(),
  contactMethod: z.string().min(2, 'Способ связи обязателен'),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    contactMethod: '',
  });

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<string | null>(null);

  const addRequest = useRequestStore((state) => state.addRequest);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //Валидация формы
    const validationResult = formSchema.safeParse(formData);
    if (!validationResult.success) {
      setFormErrors(
        validationResult.error.errors.map((err) => err.message).join(', ')
      );
      return;
    }

    try {
      addRequest(formData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setIsSuccess(false);
    }

    setIsModalOpen(true);

    setFormData({
      name: '',
      email: '',
      description: '',
      contactMethod: '',
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '40px',
        borderRadius: '16px',
        marginTop: '50px',
      }}
    >
      <Box
        sx={{
          borderRadius: '16px',
          width: '210px',
          height: '45px',
          background: 'rgba(123, 74, 226, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" fontSize={'19px'}>
          📨 Обратная связь
        </Typography>
      </Box>

      <Typography variant="h1" sx={{ marginTop: '28px' }}>
        Оставьте заявку на проект и я с вами свяжусь!
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: '100%', maxWidth: '600px', marginTop: '28px' }}
      >
        <Stack spacing={3}>
          <TextField
            label="Имя"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors}
            helperText={formErrors}
            slotProps={{
              inputLabel: {
                style: { color: '#ffffff80' },
              },
              htmlInput: {
                autoComplete: 'off',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                border: '1px solid rgba(123, 74, 226, 0.5)',
                color: '#ffffff80',
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors}
            helperText={formErrors}
            slotProps={{
              inputLabel: {
                style: { color: '#ffffff80' },
              },
              htmlInput: {
                autoComplete: 'off',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                border: '1px solid rgba(123, 74, 226, 0.5)',
                color: '#ffffff80',
              },
            }}
          />
          <TextField
            label="Описание проекта"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                style: { color: '#ffffff80' },
              },
              htmlInput: {
                autoComplete: 'off',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                border: '1px solid rgba(123, 74, 226, 0.5)',
                color: '#ffffff80',
              },
            }}
          />
          <TextField
            label="Удобный способ связаться с вами"
            variant="outlined"
            fullWidth
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                style: { color: '#ffffff80' },
              },
              htmlInput: {
                autoComplete: 'off',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                border: '1px solid rgba(123, 74, 226, 0.5)',
                color: '#ffffff80',
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              sx={{
                border: '1px solid rgba(123, 74, 226, 0.5)',
                borderRadius: '16px',
                width: '253px',
                height: '44px',
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
              Отправить
            </Button>
          </Box>
        </Stack>
      </Box>

      <Dialog open={isModalOpen} onClose={handleClose}>
        <DialogTitle>{isSuccess ? 'Успех!' : 'Ошибка!'}</DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: '#ffffff80',
          }}
        >
          <Typography>
            {isSuccess
              ? 'Ваше сообщение было успешно отправлено!'
              : 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.'}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              color: 'white',
              border: '1px solid rgba(123, 74, 226, 0.5)',
              borderRadius: '16px',
              '&:hover': {
                backgroundColor: '#7B4AE2',
              },
            }}
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
