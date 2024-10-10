import { ReactNode } from 'react';
import { Modal, Box, Typography, Fade } from '@mui/material';

interface AdminConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
}
export default function AdminConfirmModal({
  open,
  onClose,
  title,
  description,
  children,
}: AdminConfirmModalProps) {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{description}</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: 4,
            }}
          >
            {children}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
