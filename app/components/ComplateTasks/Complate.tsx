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
  const completedTasks = isTodo((state) => state.completedTasks);
  const removeCompaleteTask = isTodo((state) => state.removeCompaleteTask);

  return (
    <section className={styles.todoContainer}>
      <div className={styles.hedline}>
        <div className={styles.boxLeft}>
          <img src="/Book.svg" alt="Completed Tasks" />
          <p>Completed Task</p>
        </div>
      </div>

      <section className={styles.tasks} id="tasksContainer">
        {completedTasks.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No completed tasks yet!</p>
          </div>
        ) : (
          completedTasks.map((todo) => (
            <div key={todo.id} className={styles.task}>
              <div className={styles.taskNote}></div>

              <div className={styles.taskInfo}>
                <div className={styles.taskHeading}>
                  <p className={styles.heading}>{todo.title}</p>
                  <Icon name={IconName.menu} width={25} height={25} />
                </div>

                <div className={styles.taskContent}>
                  <div className={styles.text}>
                    <p>{todo.text}</p>
                  </div>
                </div>

                <div className={styles.taskData}>
                  <div className={styles.priority}>
                    <p className={styles.name}>
                      Priority:{" "}
                      <span className={styles.priorityExtreme}>
                        {todo.priority.Priority}
                      </span>
                    </p>
                    <p className={styles.name}>
                      Status: <span className={styles.span}>Completed ✅</span>
                    </p>
                    <p className={styles.name}>
                      Created on:{" "}
                      <span className={styles.span}>{todo.date}</span>
                    </p>
                  </div>

                  <div className={styles.editContainer}>
                    <Button
                      lable="Delete Task"
                      variant="error"
                      onClick={() => removeCompaleteTask(todo.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </section>
  );
};
