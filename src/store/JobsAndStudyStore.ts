import { create } from 'zustand';

interface Job {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

interface Study {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

interface JobsAndStudyStore {
  jobs: Job[];
  studies: Study[];
  addJob: (job: Job) => void;
  addStudy: (study: Study) => void;
}

export const useJobsAndStudyStore = create<JobsAndStudyStore>((set) => ({
  jobs: [
    {
      id: 1,
      title: 'MP.TOOLS/Твой склад',
      description:
        'Должность: Frontend Developer. Разработка нового функционала для веб-приложения с использованием React, JavaScript, Typescript, а также с помощью других технологий, таких как Redux. Верстка с использованием MUI',
      date: 'Апрель/2024 · Настоящее время',
      url: 'https://mp.tools/',
    },
    {
      id: 2,
      title: 'Oleg Tech',
      description:
        'Должность: Frontend Developer. Разработка лендингов и больших веб-приложений.',
      date: 'Апрель/2024 · Настоящее время',
      url: 'https://olegteam.ru/',
    },
  ],
  studies: [
    {
      id: 1,
      title: 'СПбГУ',
      description:
        'Восточный факультет. Кафердра арабской филилогии. Исламоведение.',
      date: 'Сентябрь/2021 · Ноябрь/2023',
      url: 'https://orient.spbu.ru/index.php/ru/',
    },
    {
      id: 2,
      title: 'Филимонов Карьера',
      description:
        'Курс: Веб-разработчик с нуля. Программа обучения основана на реальных проектах крупных ИТ-компаний и банков.',
      date: 'Февраль/2024 · Октябрь/2024',
      url: 'https://filimonov.school/',
    },
  ],
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
  addStudy: (study) => set((state) => ({ studies: [...state.studies, study] })),
}));
