import styles from './TaskPopap.module.scss';





type TaskPopapProps = {
  onClose: () => void;
};

export const TaskPopap = (props : TaskPopapProps) => {
    return (
      <section className={styles.container}>

        <div className={styles.top}>
          <p className={styles.title}>Add Task</p>
          <button className={styles.close} onClick={props.onClose}>
             Go Back
          </button>
        </div>

        <form className={styles.forms}></form>




 
      </section>
    )
}