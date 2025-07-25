"use client";
import Image from "next/image";
import styles from "./Icon.module.scss";
import { IconProps } from "./Icon.types";
import { useState } from "react";

export default function Icon(props: IconProps & { isActive?: boolean }) {
  const [localActive, setLocalActive] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }

    if (props.isActive === undefined) {
      setLocalActive(prev => !prev); 
    }
  };

  const isActive = props.isActive ?? localActive;

  const src = `/icon/${props.name}${isActive ? "-active" : ""}.svg`;

  return (
    <Image
      src={src}
      alt={`${props.name} icon`}
      width={props.width}
      height={props.height}
      className={`${styles.icon} ${isActive ? styles.active : ""} ${props.className ?? ""}`}
      onClick={handleClick}
    />
  );
}