"use client";
import Image from "next/image";
import styles from "./Icon.module.scss";

import { useEffect, useState } from "react";
import { IconName, IconProps } from "./Icon.types";
 

export default function (props: IconProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsActive((prev) => !prev);
    if (props.onClick) {
      props.onClick(e);
    }
  };
const src = `/icon/${props.name}${
    props.isActive && isActive ? "-active" : ""
  }.svg`;

  useEffect(() => {
    if (props.isActive) {
      setIsActive(props.isActive);
    }
  }, [props.isActive]);
  return (
    <Image
      src={src}
      alt={`${props.name} icon`}
      width={props.width}
      height={props.height}
      onClick={handleClick}
      className={props.className}
    />
  );
};