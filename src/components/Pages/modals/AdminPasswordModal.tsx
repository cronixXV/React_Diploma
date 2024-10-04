import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../ constants/useAuth';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material';

interface PasswordModalProps {
  open: boolean;
  onSuccess: () => void;
  onClose: () => void;
}

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export default function AdminPasswordModal({
  open,
  onClose,
}: PasswordModalProps) {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      login(password);
      onClose();
      navigate('/admin');
    } else {
      setErrorMessage('Вы не администратор, извините, доступ запрещен.');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h6">Вход в админ-панель</Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Пароль"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && (
          <Typography color="error" variant="body2" sx={{ marginTop: '10px' }}>
            {errorMessage}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
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
          onClick={handleSubmit}
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
          Войти
        </Button>
      </DialogActions>
    </Dialog>
  );
}
