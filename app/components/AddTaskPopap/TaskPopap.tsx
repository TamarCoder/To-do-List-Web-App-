"use client";
import Button from "../Button/Button";
import { ButtonType } from "../Button/Button.types";
import Input from "../Input/Input";
import { InputProps } from "../Input/input.type";
import styles from "./TaskPopap.module.scss";
 
type TaskPopapProps = {
  onClose: () => void;
  InputProps?: InputProps;
};

export const TaskPopap = (props: TaskPopapProps) => {
  

 

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <p className={styles.title}>Add New Task</p>
        <button className={styles.close} onClick={props.onClose}>
          Go Back
        </button>
      </div>
      <form className={styles.forms}>
        <div className={styles.wrapper}>
          <label htmlFor="text" className={styles.lable}>
            Title
          </label>
          <Input
            id="text"
            type="text"
            name="text"
            placeholder="Enter First Name"
           
          />
        </div>

        <div className={styles.wrapper}>
          <label htmlFor="data" className={styles.lable}>
            Data
          </label>
          <Input
            id="date"
            type="date"
            name="date"
            placeholder="Select a date"
          />
        </div>

        <div className={styles.checkWrappers}>
          <label htmlFor="" className={styles.lable}>
            Priority
          </label>

          <div className={styles.status}>
            <div className={styles.box}>
              <label htmlFor="Extreme">Extreme</label>
              <input type="checkbox" name="Extreme" />
            </div>
            <div className={styles.box}>
              <label htmlFor="Moderate">Moderate</label>
              <input type="checkbox" name="Moderate" />
            </div>
            <div className={styles.box}>
              <label htmlFor="Low">Low</label>
              <input type="checkbox" name="Low" />
            </div>
          </div>
        </div>

        <div className={styles.texts}>
          <label htmlFor="" className={styles.lable}>
            Task Description
          </label>
          <textarea
            name="text"
            id="text"
            placeholder="Start writing here....."
            
          />
        </div>
      </form>
      <Button
        lable="Add Tasks"
        variant="primaryLight"
        type={ButtonType.button}
      />
    </section>
  );
};
