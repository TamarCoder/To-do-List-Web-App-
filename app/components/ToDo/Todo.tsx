"use client";
import { useState } from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import styles from "./Todo.module.scss";
import { TaskPopap } from "../AddTaskPopap/TaskPopap";
import { isTodo } from "../../store/task";


interface TodoProps {
  onAddTaskClick?: () => void;
  ButtonProps?: ButtonProps
}

export const Todo = (props: TodoProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const todos = isTodo((state) => state.todos);

  return (
    <section className={styles.todoContainer}>
      <div className={styles.hedline}>
        <div className={styles.boxLeft}>
          <img src="/Pending.svg" alt="Pending" />
          <p>To-Do</p>
        </div>
        <button onClick={props.onAddTaskClick}  className={styles.addTask}>
 
          <Icon
            name={IconName.plus}
            width={20}
            height={20}
            className={styles.icon}
          />
          <p>Add task</p>
        </button>
      </div>

      <section className={styles.tasks} id="tasksContainer">
        {todos.map((todo) => (
          <div className={styles.task}>
            <div className={styles.taskNote}></div>
            <div className={styles.taskInfo}>
              <div className={styles.taskHeading}>
                <p className={styles.heading}> {todo.title}</p>
              </div>
              <div className={styles.taskContent}>
                <div className={styles.text}>
                  <p>{todo.title}</p>
                </div>
              </div>
              <div className={styles.taskData}>
                <p className={styles.name}>
                  <span className={styles.priorityExtreme}>
                    {todo.priority.Priority}{" "}
                  </span>
                </p>
                <p className={styles.name}>
                  Status: <span className={styles.span}>Not Started</span>
                </p>
                <p className={styles.name}>
                  Created on: <span className={styles.span}> {todo.date}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

         
    </section>
  );
};
