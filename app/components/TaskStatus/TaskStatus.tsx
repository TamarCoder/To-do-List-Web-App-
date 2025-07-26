import { ButtonProps } from "../Button/Button.types";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import styles from "./TaskStatus.module.scss";

export const TaskStatus = (props: ButtonProps) => {
  return (
    <section className={styles.todoContainer}>
      <div className={styles.taskStatus}>
        <div className={styles.boxLeft}>
          <img src="/TaskComplete.svg" alt="Pending" />
          <p>Task Status</p>
        </div>

        <div className={styles.resultContainer}>
          <div className={styles.wrapper}>
            <div>
              <div className={styles.boxImg}>
                <img src="/EllipseGrey.svg" alt="" />
              </div>
              <div className={styles.green}>
                <img src="/EllipseGreen.svg" alt="" />
              </div>
            </div>

            <div className={styles.dots}>
              <img src="/dotGreen.svg" alt="dot" />
              <p>Completed</p>
            </div>
          </div>

          <div className={styles.wrapper}>
            <div>
              <div className={styles.boxImgBlue}>
                <img src="/Ellipse3.svg" alt="" />
              </div>
              <div className={styles.blue}>
                <img src="/EllipseBlue.svg" alt="" />
              </div>
            </div>

            <div className={styles.dots}>
              <img src="/dotBlue.svg" alt="dot" />
              <p>In Progress</p>
            </div>
          </div>

          <div className={styles.wrapper}>
            <div>
              <div className={styles.boxImgGrey}>
                <img src="/Ellipse.svg" alt="" />
              </div>
              <div className={styles.red}>
                <img src="/EllipseRed.svg" alt="" />
              </div>
            </div>
            <div className={styles.dots}>
              <img src="/dotRed.svg" alt="dot" />
              <p>Not Started</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.complateTask}>
        <div className={styles.boxLeft}>
          <img src="/TaskComplete.svg" alt="Pending" />
          <p>Task Status</p>
        </div>

        <section className={styles.tasks}>
          <div className={styles.task}>
            <div className={styles.taskNote}></div>
            <div className={styles.taskInfo}>
              <div className={styles.taskHeading}>
                <p className={styles.heading}>
                  Attend Nischal’s Birthday Party
                </p>
                <Icon
                  name={IconName.menu}
                  width={23}
                  height={23}
                  className={styles.icon}
                />
              </div>
              <div className={styles.taskContent}>
                <div className={styles.text}>
                  <p>
                    Buy gifts on the way and pick up cake from the bakery. (6 PM
                    | Fresh Elements).....
                  </p>
                </div>
                <div className={styles.img}>
                  <img src="/taskImg.jpg" alt="img" className={styles.img} />
                </div>
              </div>
              <div className={styles.taskData}>
                <p className={styles.name}>
                  Priority: <span className={styles.span}> Moderate</span>
                </p>
                <p className={styles.name}>
                  Status: <span className={styles.span}> Not Started</span>
                </p>
                <p className={styles.name}>
                  Created on: <span className={styles.span}> 20/06/2023 </span>
                </p>
              </div>
            </div>
          </div>          
        </section>
      </div>
    </section>
  );
};
