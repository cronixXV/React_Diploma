import { create } from 'zustand';

import ProjectExample1 from '../media/img/projectsexamples/scrin1.png';
import ProjectExample2 from '../media/img/projectsexamples/projectExample2.jpg';
import ProjectExample3 from '../media/img/projectsexamples/projectExample3.jpg';
import ProjectExample4 from '../media/img/projectsexamples/projectExample4.jpg';
import ProjectExample5 from '../media/img/projectsexamples/projectExample5.jpg';
import ProjectExample6 from '../media/img/projectsexamples/projectExample6.jpg';
import ProjectExample7 from '../media/img/projectsexamples/projectExample7.jpg';
import ProjectExample8 from '../media/img/projectsexamples/projectExample8.jpg';
import ProjectExample9 from '../media/img/projectsexamples/projectExample9.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

interface ProjectState {
  projects: Project[];
  addProject: (project: Project) => void;
  removeProject: (id: number) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [
    {
      id: 1,
      title: 'Сервис для учета статистики для селлеров',
      description:
        'Склад и финансы в облаке для селлеров на Wildberries и Ozon',
      technologies: ['TS', 'React', 'Redux', 'MUI', 'NGINX'],
      imageUrl: ProjectExample9,
      link: 'https://tvoysklad.online/',
    },
    {
      id: 2,
      title: 'Сайт-портфолио',
      description:
        'Данный проект - моя визитка, созданная для ознакомления с моими компетенциями и навыками, а также для связи со мной.',
      technologies: ['TS', 'React', 'Zustand', 'MUI'],
      imageUrl: ProjectExample8,
      link: 'https://github.com/cronixXV/React_Diploma',
    },
    {
      id: 3,
      title: 'Книга учета доходов и расходов',
      description:
        'С помощью данного сервиса вы можете быстро создать книгу учёта доходов и расходов для личных финансов.',
      technologies: ['TS', 'React', 'Redux', 'Bootstrap'],
      imageUrl: ProjectExample1,
      link: 'https://github.com/cronixXV/Incomes-and-expenses-book-app-onTs',
    },
    {
      id: 4,
      title: 'Севрис поиска фильмов и сериалов',
      description:
        'С помощью данного сервиса вы можете быстро найти подходящие фильмы и сериалы.',
      technologies: ['JS', 'React', 'Redux', 'Bootstrap'],
      imageUrl: ProjectExample2,
      link: 'https://github.com/cronixXV/Search-movies-tvShows-app',
    },
    {
      id: 5,
      title: 'Игра Tic-Tac-Toe',
      description:
        'Игра позволяет игроку соревноваться с компьютером или с другими пользователями на одном устройстве.',
      technologies: ['TypeScript', 'SCSS', 'Webpack'],
      imageUrl: ProjectExample3,
      link: 'https://github.com/cronixXV/Tic-Tac-Toe',
    },
    {
      id: 6,
      title: 'API для сайта-портфолио',
      description:
        'Для создания API используется фреймворк Express.js. В качестве базы данных выбрана MongoDB. Взаимодействие с базой данных осуществляется через Mongoose ORM.',
      technologies: ['NodeJS', 'ExpressJS', 'MongoDB', 'Docker'],
      imageUrl: ProjectExample4,
      link: 'https://github.com/cronixXV/project_api',
    },
    {
      id: 7,
      title: 'TODO List',
      description:
        'Проект представляет собой приложение для управления списком дел.',
      technologies: ['JS', 'HTML', 'CSS'],
      imageUrl: ProjectExample5,
      link: 'https://github.com/cronixXV/project_todo_list',
    },
    {
      id: 8,
      title: 'Музыкальный проигрыватель',
      description: 'Проект представляет собой музыкальный плеер',
      technologies: ['JS', 'HTML', 'CSS'],
      imageUrl: ProjectExample6,
      link: 'https://github.com/cronixXV/project_music-player',
    },
    {
      id: 9,
      title: 'Умные заметки',
      description:
        'Проект представляет собой приложение для создания и хранения заметок',
      technologies: ['JS', 'HTML', 'CSS'],
      imageUrl: ProjectExample7,
      link: 'https://github.com/cronixXV/project_notes_js',
    },
  ],
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),
  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    })),
}));
