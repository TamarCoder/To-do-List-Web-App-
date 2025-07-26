"use client"
import { useState } from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import styles from "./Todo.module.scss";
import { TaskPopap } from "../AddTaskPopap/TaskPopap";

export const Todo = (props: ButtonProps) => {

   const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  return (
    <section className={styles.todoContainer}>
      <div className={styles.hedline}>
        <div className={styles.boxLeft}>
          <img src="/Pending.svg" alt="Pending" />
          <p>To-Do</p>
        </div>
        <button   onClick={() => setIsPopupOpen(true)} className={styles.addTask}>
          {props.children}
          <Icon
            name={IconName.plus}
            width={20}
            height={20}
            className={styles.icon}
          />
          <p>Add task</p>
        </button>
      </div>

      <section className={styles.tasks}>

        <div className={styles.task}>
          <div className={styles.taskNote}></div>
          <div className={styles.taskInfo}>
            <div className={styles.taskHeading}>
              <p className={styles.heading}>Attend Nischal’s Birthday Party</p>
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
                  Buy gifts on the way and pick up cake from the bakery. (6 PM |
                  Fresh Elements).....
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


        {isPopupOpen && <TaskPopap onClose={() => setIsPopupOpen(false)} />}
    </section>
  );
};