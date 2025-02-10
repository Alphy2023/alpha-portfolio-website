"use client";

import { create } from "zustand";
import { User, AboutMe } from "@/types";

interface SystemState {
    user: User | null;
    setUser: (user: User | null) => void;

    aboutMe: AboutMe | null;
    setAboutMe: (about: AboutMe | null) => void;
}

export const useSystemStore = create<SystemState>((set) => ({
    user: null,
    aboutMe: null,
    setUser: (user) => set({ user }),
    setAboutMe: (about) => set({ aboutMe: about }), 
}));
