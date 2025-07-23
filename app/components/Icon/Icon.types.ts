import {JSX} from 'react';

export type IconType = (props: IconProps) => JSX.Element


export enum IconName {
     name= 'password',
     lastName= 'lastName',
     userName = 'userName',
     email = 'email',
     password = 'password',
     confirm = 'confirm',
     check = 'check',
     search = 'search'
}

export interface IconProps {
    name: IconName;
    isActive? : boolean;
    onClick? :(e: React.MouseEvent) => void; 
    alt? : string;
    width : number;
    height : number;
    className?: string
}