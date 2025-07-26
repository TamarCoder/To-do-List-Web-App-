"use client";
import { useState } from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import styles from "./Complate.module.scss";
import { TaskPopap } from "../AddTaskPopap/TaskPopap";
import { isTodo } from "../../store/task";

export const Complate = () => {
  return (
    <section className={styles.todoContainer}>
      <div className={styles.hedline}>
        <div className={styles.boxLeft}>
          <img src="/Book.svg" alt="" />
          <p>Completed Task</p>
        </div>
      </div>

      <section className={styles.tasks} id="tasksContainer">
        <div className={styles.task}>
          <div className={styles.taskNote}></div>
          <div className={styles.taskInfo}>
            <div className={styles.taskHeading}>
              <p className={styles.heading}></p>
               <Icon name={IconName.menu} width={25} height={25}/>
            </div>
            <div className={styles.taskContent}>
              <div className={styles.text}>
                <p></p>
              </div>
            </div>
            <div className={styles.taskData}>
              <p className={styles.name}>
                <span className={styles.priorityExtreme}></span>
              </p>
              <p className={styles.name}></p>
              <p className={styles.name}></p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
