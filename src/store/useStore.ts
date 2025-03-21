import { create } from 'zustand';

type Store = {
    isAsideOpen: boolean;
    toggleAside: () => void;
    activeItem: string;
    setActiveItem: (item: string) => void;
};

export const useStore = create<Store>((set) => ({
    isAsideOpen: true,
    toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),
    activeItem: 'home',
    setActiveItem: (item) => set({ activeItem: item }),
}));