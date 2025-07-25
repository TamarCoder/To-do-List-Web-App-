import React, { ReactNode } from "react";

export type Variant = "default" | "primary" | 'primaryLight'|  "secondary" | "danger" | "outline";
export type Size = "sm" | "md" | "lg";

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export type ButtonProps = {
  type?: ButtonType;
  lable?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  
};


 