import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export default function (props: ButtonProps) {
  const variant = props.variant ?? "default";
  const size = props.size ?? "md";

  const buttonClasses = [
    styles.container,
    styles[variant as keyof typeof styles],
    styles[size as keyof typeof styles],
    props.className,
  ];

  if (props.variant) {
    const variantClass = styles[props.variant];
    if (variantClass) {
      buttonClasses.push(variantClass);
    }
  }

  if (props.size) {
    const sizeClass = styles[props.size];
    if (sizeClass) {
      buttonClasses.push(sizeClass);
    }
  }

  return (
    <div>
      <button
        className={buttonClasses.join(" ").trim()}
        onClick={props.onClick}
        type={props.type}
      >
        {props.lable}
      </button>
    </div>
  );
}
