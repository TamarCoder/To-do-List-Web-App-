"use client";
import styles from "./page.module.scss";
import { RegisterForm } from "../app/components/Register/RegisterForm";
import { LoginForm } from "./components/Login/LoginForm";
import { useEffect, useState } from "react";
import { useAuthStore } from "./store/auth";

// Next.js router-ის ჰუკი გვერდებზე გადასართავად
import { useRouter } from "next/navigation";

export default function MainPage() {
  //  მდგომარეობა, რომელიც განსაზღვრავს ლოგინის ფორმა ჩანს თუ რეგისტრაცია
  const [showLogin, setShowLogin] = useState(false);
  // Zustand store-დან ავთენტიკაციის სტატუსი და login ფუნქცია
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);

  // router-ი გვერდებზე გადასასვლელად
  const router = useRouter();

  // ეს ფუნქცია იძახება ლოგინის ღილაკზე დაჭერისას:
  // 1. ადგენს isAuthenticated-ს true-ზე (login())
  // 2. გადაგიყვანს /home გვერდზე
  const handleLogin = () => {
    login();             
    router.push("/home"); 
  };
  // რენდერი: თუ showLogin true-ა → login ფორმა გამოჩნდება, 
  // თუ false-ა → register ფორმა გამოჩნდება
  return (
    <div className={styles.pageWrapper}>
      {!showLogin ? (
        <RegisterForm
          onSwitchToLogin={() => setShowLogin(true)}  
        />
      ) : (
        <LoginForm
          onLogin={handleLogin}                      // ლოგინის ღილაკზე დაჭერით გამოძახება
          onSwitchToRegister={() => setShowLogin(false)} // დაბრუნება რეგისტრაციაზე
        />
      )}
    </div>
  );
}