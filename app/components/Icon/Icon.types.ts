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
     search = 'search',
     bell = 'bell',
     calendar = 'calendar',
     dashboared = 'dashboared',
     vital = 'vital',
     myTask = 'myTask',
     tasks = 'tasks',
     setting = 'setting',
     help = 'help',
     logout = 'logout',
     plus ='plus',
     menu = 'menu'
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