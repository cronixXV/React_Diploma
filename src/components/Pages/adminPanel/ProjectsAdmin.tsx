import { useState } from 'react';
import { useProjectStore } from '../../../store/ProjectStore';

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

export default function ProjectsAdmin() {
  const { projects, addProject, removeProject } = useProjectStore();

  const [newProject, setNewProject] = useState({
    id: 0,
    title: '',
    description: '',
    technologies: [''],
    imageUrl: '',
    link: '',
  });

  const [openConfirm, setOpenConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const handleAddProject = () => {
    addProject({ ...newProject, id: projects.length + 1 });
    setNewProject({
      id: 0,
      title: '',
      description: '',
      technologies: [],
      imageUrl: '',
      link: '',
    });
  };

  const handleRemoveProject = (id: number) => {
    removeProject(id);
    setOpenConfirm(false);
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
    if (itemToDelete) {
      handleRemoveProject(itemToDelete);
    }
  };

  return (
    <Stack sx={{ padding: '20px' }}>
      <Typography variant="h2">Проекты</Typography>

      <Stack
        sx={{ width: '50%', marginTop: '20px', gap: '20px', margin: '0 auto' }}
      >
        <Typography variant="h3" mt={4} mb={4}>
          Добавить новый проект:
        </Typography>

        <TextField
          className="adminTextField"
          label="Название"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
        />
        <TextField
          className="adminTextField"
          label="Описание"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <TextField
          className="adminTextField"
          label="Ссылка"
          value={newProject.link}
          onChange={(e) =>
            setNewProject({ ...newProject, link: e.target.value })
          }
        />
        <TextField
          className="adminTextField"
          label="Технологии"
          value={newProject.technologies}
          onChange={(e) =>
            setNewProject({
              ...newProject,
              technologies: e.target.value.split(','),
            })
          }
        />
        <TextField
          className="adminTextField"
          label="Ссылка на изображение"
          value={newProject.imageUrl}
          onChange={(e) =>
            setNewProject({ ...newProject, imageUrl: e.target.value })
          }
        />
        <TextField
          className="adminTextField"
          label="Ссылка на репозиторий"
          value={newProject.link}
          onChange={(e) =>
            setNewProject({ ...newProject, link: e.target.value })
          }
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            onClick={handleAddProject}
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
            Добавить проект
          </Button>
        </Box>
      </Stack>

      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h3">Текущие проекты</Typography>
        {projects.map((project) => (
          <Box
            key={project.id}
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
              <Typography variant="h6">{project.title}</Typography>
              <Typography>{project.description}</Typography>
              <Typography>{project.technologies}</Typography>
              <Typography>{project.imageUrl}</Typography>
              <Typography>{project.link}</Typography>
            </Box>
            <IconButton
              onClick={() => handleOpenConfirm(project.id)}
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
