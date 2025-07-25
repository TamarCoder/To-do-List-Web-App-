"use client";
import Image from "next/image";
import styles from "./Icon.module.scss";
import { IconProps } from "./Icon.types";

export default function Icon(props: IconProps & { isActive?: boolean }) {


  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  const src = `/icon/${props.name}${props.isActive ? "-active" : ""}.svg`;

  return (
    <Image
      src={src}
      alt={`${props.name} icon`}
      width={props.width}
      height={props.height}
      className={`${styles.icon} ${props.isActive ? styles.active : ""} ${props.className ?? ""}`}
      onClick={handleClick}
    />
  );
}