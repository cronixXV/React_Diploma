import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface Request {
  id: string;
  name: string;
  email: string;
  description?: string;
  contactMethod: string;
}

interface RequestStore {
  requests: Request[];
  addRequest: (request: Omit<Request, 'id'>) => void;
}

export const useRequestStore = create<RequestStore>((set) => ({
  requests: [],
  addRequest: (request: Omit<Request, 'id'>) => {
    console.log('Добавляем запрос:', request);
    set((state) => {
      const newRequests = [...state.requests, { ...request, id: uuidv4() }];
      console.log('Обновленное состояние:', newRequests);
      return { requests: newRequests };
    });
  },
}));
