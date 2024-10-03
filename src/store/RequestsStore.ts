import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

interface Request {
  id: string;
  name: string;
  email: string;
  description?: string;
  contactMethod: string;
  timestamp: string;
}

interface RequestStore {
  requests: Request[];
  addRequest: (request: Omit<Request, 'id' | 'timestamp'>) => void;
  removeRequest: (id: string) => void;
}

const requestStore: StateCreator<RequestStore, [], [], RequestStore> = (
  set
) => ({
  requests: [],
  addRequest: async (request: Omit<Request, 'id' | 'timestamp'>) => {
    const newRequest = {
      ...request,
      id: uuidv4(),
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('http://localhost:5174/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRequest),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке запроса');
      }

      // Добавляем запрос в состояние, только если отправка успешна
      set((state) => ({
        requests: [...state.requests, newRequest],
      }));
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      throw error;
    }
  },
  removeRequest: (id: string) => {
    set((state: RequestStore) => ({
      requests: state.requests.filter((request) => request.id !== id),
    }));
  },
});

const persistOptions: PersistOptions<RequestStore> = {
  name: 'requests-storage',
  getStorage: () => localStorage,
};

export const useRequestStore = create<RequestStore>()(
  persist(requestStore, persistOptions)
);
