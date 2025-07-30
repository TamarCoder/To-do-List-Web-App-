import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
import { IconName } from "../components/Icon/Icon.types";
import styles from "./page.module.scss";

export default function Categories() {
  return (
    <section className={styles.mainContianer}>
      <section className={styles.newCategories}>
        <div className={styles.heading}>
          <h1 className={styles.hedline}>Task Categories</h1>
          <p className={styles.text}>Go Back</p>
        </div>
        <Button variant="primary" lable="Add Category" />
      </section>
      <section className={styles.newWrappers}>

        <div className={styles.box}>
          <div className={styles.heading}>
            <h1 className={styles.text}>Task Status </h1>
            <div className={styles.btn}>
              <Icon  name={IconName.plus} width={15} height={15}/>
              <p className={styles.span}>Add Task Status</p>
            </div>

          </div>

        </div>
      </section>
    </section>
  );
}
