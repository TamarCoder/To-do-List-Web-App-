import Button from "../Button/Button";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <section className={styles.banerContrainer}>
      <div className={styles.title}>
        <h1>Welcome back, Sundar</h1>
        <img src="/hand.svg" alt="hand" />
      </div>
      <div className={styles.invate}>
        <div className={styles.images}>
          <img src="/profile1.svg" alt="profile" className={styles.img} />
          <img src="/profile2.svg" alt="profile" className={styles.img} />
          <img src="/profile3.svg" alt="profile" className={styles.img} />
          <img src="/profile4.svg" alt="profile" className={styles.img} />
          <div className={styles.prrofile}>
            <p className={styles.ovefley}>4+</p>
          </div>
        </div>

        <button className={styles.btn}>
          <img src="/icon/invite-active.svg" className={styles.invt} />
          <span>Invite</span>
        </button>
      </div>
    </section>
  );
};
