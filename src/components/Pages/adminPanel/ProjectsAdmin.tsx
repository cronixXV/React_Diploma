import { useState } from 'react';
import { useProjectStore } from '../../../store/ProjectStore';

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
  const [openStatus, setOpenStatus] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    id: number;
    type: 'project';
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

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
    setStatusMessage('Проект успешно удален');
    setOpenStatus(true);
  };

  const handleOpenConfirm = (item: { id: number; type: 'project' }) => {
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
      if (itemToDelete.type === 'project') {
        handleRemoveProject(itemToDelete.id);
      }
    }
    handleCloseConfirm();
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

        <StyledTextField
          label="Название"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
        />
        <StyledTextField
          label="Описание"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <StyledTextField
          label="Ссылка"
          value={newProject.link}
          onChange={(e) =>
            setNewProject({ ...newProject, link: e.target.value })
          }
        />
        <StyledTextField
          label="технологии"
          value={newProject.technologies}
          onChange={(e) =>
            setNewProject({
              ...newProject,
              technologies: e.target.value.split(','),
            })
          }
        />
        <StyledTextField
          label="Ссылка на изображение"
          value={newProject.imageUrl}
          onChange={(e) =>
            setNewProject({ ...newProject, imageUrl: e.target.value })
          }
        />
        <StyledTextField
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
              onClick={() =>
                handleOpenConfirm({ id: project.id, type: 'project' })
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
