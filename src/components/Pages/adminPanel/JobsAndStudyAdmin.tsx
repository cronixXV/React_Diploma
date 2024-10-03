import { useState } from 'react';
import { useJobsAndStudyStore } from '../../../store/JobsAndStudyStore';

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

export default function JobsAndStudyAdmin() {
  const { jobs, studies, addJob, addStudy, removeJob, removeStudy } =
    useJobsAndStudyStore();

  const [newJob, setNewJob] = useState({
    id: 0,
    title: '',
    description: '',
    date: '',
    url: '',
  });
  const [newStudy, setNewStudy] = useState({
    id: 0,
    title: '',
    description: '',
    date: '',
    url: '',
  });

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    id: number;
    type: 'job' | 'study';
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleAddJob = () => {
    addJob({ ...newJob, id: jobs.length + 1 });
    setNewJob({ id: 0, title: '', description: '', date: '', url: '' });
  };

  const handleAddStudy = () => {
    addStudy({ ...newStudy, id: studies.length + 1 });
    setNewStudy({ id: 0, title: '', description: '', date: '', url: '' });
  };

  const handleRemoveJob = (id: number) => {
    removeJob(id);
    setStatusMessage('Работа успешно удалена');
    setOpenStatus(true);
  };

  const handleRemoveStudy = (id: number) => {
    removeStudy(id);
    setStatusMessage('Обучение успешно удалено');
    setOpenStatus(true);
  };

  const handleOpenConfirm = (item: { id: number; type: 'job' | 'study' }) => {
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
      if (itemToDelete.type === 'job') {
        handleRemoveJob(itemToDelete.id);
      } else if (itemToDelete.type === 'study') {
        handleRemoveStudy(itemToDelete.id);
      }
    }
    handleCloseConfirm();
  };

  return (
    <Stack sx={{ padding: '20px' }}>
      <Typography variant="h2">Карьера</Typography>

      <Stack
        sx={{ width: '50%', marginTop: '20px', gap: '20px', margin: '0 auto' }}
      >
        <Typography variant="h3" mt={4} mb={4}>
          Добавить новую работу:
        </Typography>
        <StyledTextField
          label="Название"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
        />
        <StyledTextField
          label="Описание"
          value={newJob.description}
          onChange={(e) =>
            setNewJob({ ...newJob, description: e.target.value })
          }
        />
        <StyledTextField
          label="Дата"
          value={newJob.date}
          onChange={(e) => setNewJob({ ...newJob, date: e.target.value })}
        />
        <StyledTextField
          label="URL"
          value={newJob.url}
          onChange={(e) => setNewJob({ ...newJob, url: e.target.value })}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            onClick={handleAddJob}
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
            Добавить работу
          </Button>
        </Box>
      </Stack>

      <Stack
        sx={{ width: '50%', marginTop: '20px', gap: '20px', margin: '0 auto' }}
      >
        <Typography variant="h3" mt={4} mb={4}>
          Добавить новое обучение:
        </Typography>
        <StyledTextField
          label="Название"
          value={newStudy.title}
          onChange={(e) => setNewStudy({ ...newStudy, title: e.target.value })}
        />
        <StyledTextField
          label="Описание"
          value={newStudy.description}
          onChange={(e) =>
            setNewStudy({ ...newStudy, description: e.target.value })
          }
        />
        <StyledTextField
          label="Дата"
          value={newStudy.date}
          onChange={(e) => setNewStudy({ ...newStudy, date: e.target.value })}
        />
        <StyledTextField
          label="URL"
          value={newStudy.url}
          onChange={(e) => setNewStudy({ ...newStudy, url: e.target.value })}
        />
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          onClick={handleAddStudy}
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
          Добавить обучение
        </Button>
      </Box>

      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h3">Текущие работы</Typography>
        {jobs.map((job) => (
          <Box
            key={job.id}
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
              <Typography variant="h6">{job.title}</Typography>
              <Typography>{job.description}</Typography>
            </Box>
            <IconButton
              onClick={() => handleOpenConfirm({ id: job.id, type: 'job' })}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h3">Текущее обучение</Typography>
        {studies.map((study) => (
          <Box
            key={study.id}
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
              <Typography variant="h6">{study.title}</Typography>
              <Typography>{study.description}</Typography>
            </Box>
            <IconButton
              onClick={() => handleOpenConfirm({ id: study.id, type: 'study' })}
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
