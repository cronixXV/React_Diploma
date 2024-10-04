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
        'Рекомендую веб-разработчика как одного из лучших. Он работал над моим веб-приложением, все было сделано в срок, качество кода отличное.',
      name: 'Роман Иванович',
      post: 'Руководитель команды разработчиков',
      imageUrl: '/path-to-image/user-one.jpg',
    },
    {
      id: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      name: 'John Wick',
      post: 'Backend Developer',
      imageUrl: '/path-to-image/user-two.jpg',
    },
    {
      id: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      name: 'Jane Doe',
      post: 'UX Designer',
      imageUrl: '/path-to-image/user-two.jpg',
    },
    {
      id: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      name: 'Jane ffff',
      post: 'UX Designer',
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
