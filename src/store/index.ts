import create from 'zustand';

interface StoreState {
  count: number;
  increase: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
