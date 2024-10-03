import { useState } from 'react';
import { useJobsAndStudyStore } from '../../../store/JobsAndStudyStore';

import {
  Stack,
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import AdminConfirmModal from '../modals/AdminConfirmModal';

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

  const [itemToDelete, setItemToDelete] = useState<{
    id: number;
    type: 'job' | 'study';
  } | null>(null);

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
    setOpenConfirm(false);
  };

  const handleRemoveStudy = (id: number) => {
    removeStudy(id);
    setOpenConfirm(false);
  };

  const handleOpenConfirm = (item: { id: number; type: 'job' | 'study' }) => {
    setItemToDelete(item);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
    setItemToDelete(null);
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

        <TextField
          className="adminTextField"
          label="Название"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
        />
        <TextField
          className="adminTextField"
          label="Описание"
          value={newJob.description}
          onChange={(e) =>
            setNewJob({ ...newJob, description: e.target.value })
          }
        />
        <TextField
          className="adminTextField"
          label="Дата"
          value={newJob.date}
          onChange={(e) => setNewJob({ ...newJob, date: e.target.value })}
        />
        <TextField
          className="adminTextField"
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
        <TextField
          className="adminTextField"
          label="Название"
          value={newStudy.title}
          onChange={(e) => setNewStudy({ ...newStudy, title: e.target.value })}
        />
        <TextField
          className="adminTextField"
          label="Описание"
          value={newStudy.description}
          onChange={(e) =>
            setNewStudy({ ...newStudy, description: e.target.value })
          }
        />
        <TextField
          className="adminTextField"
          label="Дата"
          value={newStudy.date}
          onChange={(e) => setNewStudy({ ...newStudy, date: e.target.value })}
        />
        <TextField
          className="adminTextField"
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
    </Stack>
  );
}
