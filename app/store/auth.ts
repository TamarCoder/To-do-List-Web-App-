// Zustand ბიბლიოთეკიდან იმპორტირდება create ფუნქცია, რომელიც ქმნის store-ს
import { create } from "zustand";
 
interface AuthState {
  isAuthenticated: boolean; //  სტატუსი: true თუ მომხმარებელი დალოგინებულია
  login: () => void;        // ფუნქცია, რომელიც დააყენებს მომხმარებელს როგორც "დალოგინებულს"
  logout: () => void;       // ფუნქცია, რომელიც მომხმარებელს "დაალოგაუთებს"
}

export const useAuthStore = create<AuthState>((set) => ({
  // საწყისი მდგომარეობა: მომხმარებელი არ არის ავტორიზებული
  isAuthenticated: false,

  // login ფუნქცია: მდგომარეობას ცვლის და აყენებს isAuthenticated-ს true-ზე
  login: () => set({ isAuthenticated: true }),   

  // logout ფუნქცია: მდგომარეობას ცვლის და აყენებს isAuthenticated-ს false-ზე
  logout: () => set({ isAuthenticated: false }),
}));