"use client";

import { useForm } from "react-hook-form";
import styles from "./RegisterForm.module.scss";
import Input from "../Input/Input";
import { IconName } from "../Icon/Icon.types";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { ButtonType } from "../Button/Button.types";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "./schema";
import { InferType } from "yup";
import { FC, useState } from "react";
import { useAuthStore } from "../../store/auth";

type FormData = InferType<typeof userSchema>;

interface RegisterFormProps {
  onSwitchToLogin?: () => void;
  onRegister?: () => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({
  onSwitchToLogin,
  onRegister,
}) => {
  const [showLogin, setShowLogin] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Registration data:", data);
    alert("რეგისტრაცია წარმატებით განხორციელდა");
     
    if (onSwitchToLogin) onSwitchToLogin();
  };

  return (
    <section className={styles.container}>
      <div className={styles.registerCover}></div>

      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.heading}>Sign Up</h1>
        <Input
          {...register("name")}
          id="name"
          type="text"
          name="name"
          placeholder="Enter First Name"
          iconLeft={IconName.name}
        />
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          iconLeft={IconName.lastName}
        />
        <Input
          {...register("userName", { required: "this is required" })}
          id="username"
          type="text"
          placeholder="Enter Username"
          iconLeft={IconName.userName}
        />
        <Input
          {...register("email")}
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          iconLeft={IconName.email}
        />
        <Input
          {...register("password")}
          id="password"
          type="password"
          name="password"
          placeholder="Enter Password"
          iconLeft={IconName.password}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Input
          {...register("confirm")}
          id="ConfirmPassword"
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          iconLeft={IconName.confirm}
        />{" "}
        {errors.confirm && <p>{errors.confirm.message}</p>}
        <div className={styles.dataWrapper}>
          <div className={styles.allItem}>
            <Icon name={IconName.check} width={20} height={20} alt="check" />
            <a href="#">I agree to all terms</a>
          </div>

          <Button
            lable="Register"
            variant="primary"
            type={ButtonType.submit}
          />

          <span className={styles.span} onClick={onSwitchToLogin}>
            Already have an account? <a href="#">Sign In</a>{" "}
          </span>
        </div>
      </form>
    </section>
  );
};
