import Icon from "../components/Icon/Icon";
import { IconName } from "../components/Icon/Icon.types";
import styles from "./page.module.scss";

export default function VitalTasks() {
  return (
    <section className={styles.contianer}>
      <div className={styles.VitalTasks}>
        <h1 className={styles.heading}>Vital Tasks</h1>

        <div className={styles.task}>
          <div className={styles.taskNote}></div>
          <div className={styles.taskInfo}>
            <div className={styles.taskHeading}>
              <p className={styles.heading}>Walk the dog</p>
              <Icon
                name={IconName.menu}
                width={23}
                height={23}
                className={styles.icon}
              />
            </div>
            <div className={styles.taskContent}>
              <div className={styles.text}>
                <p>Take the dog to the park and bring treats as well.....</p>
              </div>
              <div className={styles.img}>
                <img src="/dog.jpg" alt="img" className={styles.img} />
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
        <div className={styles.task}>
          <div className={styles.taskNote}></div>
          <div className={styles.taskInfo}>
            <div className={styles.taskHeading}>
              <p className={styles.heading}>Take grandma to hospital</p>
              <Icon
                name={IconName.menu}
                width={23}
                height={23}
                className={styles.icon}
              />
            </div>
            <div className={styles.taskContent}>
              <div className={styles.text}>
                <p>Go back home and take grandma to the hosp....</p>
              </div>
              <div className={styles.img}>
                <img src="/medical.jpg" alt="img" className={styles.img} />
              </div>
            </div>
            <div className={styles.taskData}>
              <p className={styles.name}>
                Priority: <span className={styles.span}> Moderate</span>
              </p>
              <p className={styles.name}>
                Status: <span className={styles.span}> In Progress</span>
              </p>
              <p className={styles.name}>
                Created on: <span className={styles.span}> 20/08/2025 </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.VitalTask}>
        <div className={styles.top}>
          <img src="/dog.jpg" alt="" className={styles.dogImg} />
          <div className={styles.hedlain}>
            <h1>Walk the dog</h1>
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
          <p>Take the dog to the park and bring treats as well.</p>
          <p>
            Take Luffy and Jiro for a leisurely stroll around the neighborhood.
            Enjoy the fresh air and give them the exercise and mental
            stimulation they need for a happy and healthy day. Don't forget to
            bring along squeaky and fluffy for some extra fun along the way!
          </p>
        </div>

        <ol className={styles.lists}>
          <li>Listen to a podcast or audiobook</li>
          <li>Practice mindfulness or meditation</li>
          <li>Take photos of interesting sights along the way</li>
          <li>Practice obedience training with your dog</li>
          <li>Chat with neighbors or other dog walkers</li>
          <li>Listen to music or an upbeat playlist</li>
        </ol>

        <div className={styles.edit}>
          <Icon name= {IconName.trash} width={36} height={36}/>
          <Icon name= {IconName.edit} width={36} height={36}/>

        </div>
      </div>
    </section>
  );
}
