import { create } from "zustand";

interface GlobalState {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
    isOpen: false,
    setIsOpen: (value: boolean) => set({ isOpen: value }),
}));