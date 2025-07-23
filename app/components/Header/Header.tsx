import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import Input from "../Input/Input";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <h1 className={styles.heading}>
          <span className={styles.headingActive}>Dash</span>board
        </h1>
      </div>
      <div className={styles.headerSearch}>
        <div className={styles.inputWrapper}>
          <input
            type="search"
            placeholder="Search your task here..."
            name="search"
            id="search"
            className={styles.input}
          />
          <Icon
            name={IconName.search}
            width={36}
            height={36}
            alt="search"
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.headerAcount}></div>
    </header>
  );
}
