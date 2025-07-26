"use client";
import { useState } from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import styles from "./Todo.module.scss";
import { TaskPopap } from "../AddTaskPopap/TaskPopap";
import { isTodo } from "../../store/task";

export const Todo = (props: ButtonProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const todos = isTodo((state) => state.todos);

  return (
    <section className={styles.todoContainer}>
      <div className={styles.hedline}>
        <div className={styles.boxLeft}>
          <img src="/Pending.svg" alt="Pending" />
          <p>To-Do</p>
        </div>
        <button onClick={() => setIsPopupOpen(true)} className={styles.addTask}>
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
        {todos.map((todo) => (
          <div className={styles.task}>
            <div className={styles.taskNote}></div>
            <div className={styles.taskInfo}>
              <div className={styles.taskHeading}>
                <p className={styles.heading}>
                  {todo.title}
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
                   {todo.text}
                  </p>
                </div>
                
              </div>
              <div className={styles.taskData}>
                <p className={styles.name}>
                 <span>{todo.priority.Priority}</span>
                </p>
                <p className={styles.name}>
                  Status: <span className={styles.span}> Not Started</span>
                </p>
                <p className={styles.name}>
                  Created on: <span className={styles.span}> {todo.date}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {isPopupOpen && <TaskPopap onClose={() => setIsPopupOpen(false)} />}
    </section>
  );
};
