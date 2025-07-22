"use client";

import { FC } from "react";
import styles from "./LoginForm.module.scss";
import { IconName } from "../Icon/Icon.types";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { ButtonType } from "../Button/Button.types";

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onLogin: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({
  onSwitchToRegister,
  onLogin,
}) => {
  return (
    <section className={styles.container}>
      <form className={styles.loginForm}
          onSubmit={(e) => {
          e.preventDefault();  
          onLogin();  
        }}
      >
        <h1 className={styles.heading}>Sign In</h1>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          iconLeft={IconName.email}
        />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Enter Password"
          iconLeft={IconName.password}
        />

        <div className={styles.dataWrapper}>
          <div className={styles.allItem}>
            <Icon name={IconName.check} width={20} height={20} alt="check" />
            <a href="#"> Remember Me</a>
          </div>

          <Button
            lable="Log In"
            variant="primaryLight"
            type={ButtonType.submit}
          />

          <span className={styles.span} onClick={onSwitchToRegister}>
            Don’t have an account? <a href="#"> Create One</a>
          </span>
        </div>
      </form>
      <div className={styles.loginCover}></div>
    </section>
  );
};