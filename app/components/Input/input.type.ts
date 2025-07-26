import { ReactNode } from "react";

export type InputSize = "sm" | "md" | "lg";
export type InputStatus = "default" | "error" | "success";

export interface InputProps {
  name: string | undefined;
  id: string | undefined;
  label?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder :  string;
  status?: InputStatus;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'date';
  
}


