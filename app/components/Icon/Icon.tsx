"use client"
import Image from "next/image";
import styles from "./Icon.module.scss";
import { useState } from "react";
import { IconProps } from "./Icon.types";


export default ( props: IconProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsActive((prev) => !prev);
    if (props.onClick) {
      props.onClick(e);  
    }
  };

 const src = `/icon/${props.name}${isActive ? "-active" : ""}.svg`;
 

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