
import { persist } from "zustand/middleware";
import { create } from "zustand/react";
 
interface AuthState {
  isAuthenticated: boolean; //  სტატუსი: true თუ მომხმარებელი დალოგინებულია
  login: () => void;        // ფუნქცია, რომელიც დააყენებს მომხმარებელს როგორც "დალოგინებულს"
  logout: () => void;       // ფუნქცია, რომელიც მომხმარებელს "დაალოგაუთებს"
}
 

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
        // საწყისი მდგომარეობა: მომხმარებელი არ არის ავტორიზებული
      isAuthenticated: false,
        // login ფუნქცია: მდგომარეობას ცვლის და აყენებს isAuthenticated-ს true-ზე
      login: () => set({ isAuthenticated: true }),
       
          // logout ფუნქცია: მდგომარეობას ცვლის და აყენებს isAuthenticated-ს false-ზე
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);












 