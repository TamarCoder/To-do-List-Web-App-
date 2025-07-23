"use client";
import { forwardRef } from "react";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import styles from "./Input.module.scss";
import { InputProps } from "./input.type";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { iconLeft, iconRight,  className, name, ...inputProps } = props;

  return (
    <div className={styles.inputWrapper}>
      {iconRight && (
        <div className={styles.iconLeft}>
          <Icon
            name={props.name as IconName}
            width={20}
            height={20}
            alt={name || "icon"}
          />
        </div>
      )}

      <input
        ref={ref}
        className={`${styles.input} ${className || ""}`.trim()}
        name={name}
        {...inputProps}
      />
      {iconLeft && (
        <div className={styles.iconLeft}>
          <Icon
            name={props.name as IconName}
            width={20}
            height={20}
            alt={name || "icon"}
          />
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
