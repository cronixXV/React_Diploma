import { create } from 'zustand';

interface Review {
  id: number;
  description: string;
  name: string;
  post: string;
  imageUrl: string;
}

interface ReviewStore {
  reviews: Review[];
  addReview: (review: Review) => void;
  removeReview: (id: number) => void;
}

export const useReviewsStore = create<ReviewStore>((set) => ({
  reviews: [
    {
      id: 1,
      description:
        'Егор Александрович завершил программу индивидуального обучения по Web-Разработке и проявил высокий уровень дисциплины и ответственности.',
      name: 'Игорь Филлимонов',
      post: 'Fullstack Software Engineer, Преподаватель-исследователь',
      imageUrl: '#',
    },
    {
      id: 2,
      description:
        'Как директор, я хотел бы выразить свою благодарность за отличную работу, проделанную над проектом tvoysklad.online, где Егор, занимающийся Frontend-частью,демонстрирует высокий уровень профессионализма.',
      name: 'Александр Полынцев',
      post: 'Соучредитель компании Твой склад/MpTools',
      imageUrl: '/path-to-image/user-two.jpg',
    },
    {
      id: 3,
      description:
        'Как технический руководитель Frontend разработки компании OLEGtech, я хочу поблагодарить за отличную работу Егора. Наш разработчик продемонстрировал высокий уровень ответственности, учтивость к дедлайнам и креативный подход.',
      name: 'Вадим Петров',
      post: 'Технический руководитель Frontend разработки компании OLEGtech',
      imageUrl: '/path-to-image/user-two.jpg',
    },
  ],
  addReview: (review) =>
    set((state) => ({
      reviews: [...state.reviews, review],
    })),
  removeReview: (id) =>
    set((state) => ({
      reviews: state.reviews.filter((review) => review.id !== id),
    })),
}));
