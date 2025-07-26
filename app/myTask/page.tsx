import Icon from "../components/Icon/Icon";
import { IconName } from "../components/Icon/Icon.types";
import styles from "./page.module.scss";

export default function MyTasks() {
  return (
    <section className={styles.contianer}>
      <div className={styles.VitalTasks}>
        <h1 className={styles.heading}>My Tasks</h1>

        <div className={styles.task}>
          <div className={styles.taskNote}></div>
          <div className={styles.taskInfo}>
            <div className={styles.taskHeading}>
              <p className={styles.heading}>Submit Documents</p>
              <Icon
                name={IconName.menu}
                width={23}
                height={23}
                className={styles.icon}
              />
            </div>
            <div className={styles.taskContent}>
              <div className={styles.text}>
                <p>Make sure to submit all the necessary docum.....</p>
              </div>
              <div className={styles.img}>
                <img src="/tasksImg.jpg" alt="img" className={styles.img} />
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
      </div>

      <div className={styles.VitalTask}>
        <div className={styles.top}>
          <img src="/tasksImg.jpg" alt="" className={styles.dogImg} />
          <div className={styles.hedlain}>
            <h1>Submit Documents</h1>
            <p>
              Priority: <span>Extreme</span>
            </p>
            <p>
              Status: <span>Not Started</span>
            </p>
            <span className={styles.data}>Created on: 20/06/2023</span>
          </div>
        </div>
        <div className={styles.center}>
          <p>Task Title: Document Submission.</p>
          <p>
            Task Description: Review the list of documents required for
            submission and ensure all necessary documents are ready. Organize
            the documents accordingly and scan them if physical copies need to
            be submitted digitally. Rename the scanned files appropriately for
            easy identification and verify the accepted file formats. Upload the
            documents securely to the designated platform, double-check for
            accuracy, and obtain confirmation of successful submission. Follow
            up if necessary to ensure proper processing.
          </p>
        </div>

        <ol className={styles.lists}>
           
        </ol>

        <div className={styles.edit}>
          <Icon name={IconName.trash} width={36} height={36} />
          <Icon name={IconName.edit} width={36} height={36} />
        </div>
      </div>
    </section>
  );
}
