import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
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
  removeRequest: (id: string) => void;
}

const requestStore: StateCreator<RequestStore, [], [], RequestStore> = (
  set
) => ({
  requests: [],
  addRequest: (request: Omit<Request, 'id'>) => {
    set((state) => {
      const newRequests = [...state.requests, { ...request, id: uuidv4() }];

      return { requests: newRequests };
    });
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
