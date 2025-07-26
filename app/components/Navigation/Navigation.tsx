"use client";
import Link from "next/link";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";

export const Navigation = () => {
 
  const pathname = usePathname();

  const navItems = [
    { href: "/home", name: IconName.dashboared, label: "Dashboard" },
    { href: "#", name: IconName.vital, label: "Vital Task" },
    { href: "#", name: IconName.myTask, label: "My Tasks" },
    { href: "#", name: IconName.tasks, label: "Task Categories" },
    { href: "#", name: IconName.setting, label: "Settings" },
    { href: "#", name: IconName.help, label: "Help" },
  ];
  const navLogout = [{ href: "/", name: IconName.logout, label: "Logout" }];

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navLists}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} className={`${styles.item} ${isActive ? styles.active : ""}`}>
              <li className={styles.itemLi}>
                <Icon name={item.name} width={24} height={24} isActive={isActive}  className={styles.icon}/>
                <span  className={`${styles.itemSpan} ${ isActive ? styles.activeText : ""}`}>
                  {item.label}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
      {navLogout.map((item) => (
        <Link  key={item.name} href={item.href} className={styles.item} >
          <li className={styles.itemLi}>
            <Icon name={item.name} width={24} height={24}  className={styles.icon} />
            <span className={styles.itemSpan}>{item.label}</span>
          </li>
        </Link>
      ))}
    </nav>
  );
};
