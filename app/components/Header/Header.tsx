import styles from './Header.module.scss';




export default function Header() {
  return (
     <header className={styles.headerContainer}>
       <div className={styles.headerLogo}>
          <h1 className={styles.heading}><span className={styles.headingActive}>Dash</span>board</h1>
       </div>
       <div className={styles.headerSearch}></div>
       <div className={styles.headerAcount}></div>
     </header>
  );
}
