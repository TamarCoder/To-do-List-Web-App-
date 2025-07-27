"use client";
import { useState } from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";
import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import styles from "./Todo.module.scss";
import { TaskPopap } from "../AddTaskPopap/TaskPopap";
import { isTodo } from "../../store/task";
import { stat } from "fs";

interface TodoProps {
  onAddTaskClick?: () => void;
  ButtonProps?: ButtonProps;
}

export const Todo = (props: TodoProps) => {
  const todos = isTodo((state) => state.todos);
  const removeTodo = isTodo((state) => state.removeTodo);
  const addCompletedTask = isTodo((state) => state.addCompletedTask);

  return (
    <section className={styles.todoContainer}>
      <div className={styles.hedline}>
        <div className={styles.boxLeft}>
          <img src="/Pending.svg" alt="Pending" />
          <p>To-Do</p>
        </div>
        <button onClick={props.onAddTaskClick} className={styles.addTask}>
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
          <div key={todo.id} className={styles.task}>
            <div className={styles.taskNote}></div>

            <div className={styles.taskInfo}>
              <div className={styles.taskHeading}>
                <p className={styles.heading}> {todo.title}</p>
                <Icon name={IconName.menu} width={25} height={25} />
              </div>

              <div className={styles.taskContent}>
                <div className={styles.text}>
                  <p>{todo.text}</p>
                </div>
              </div>

              <div className={styles.taskData}>
                <div className={styles.prriority}>
                  <p className={styles.name}>
                    <span className={styles.priorityExtreme}>
                      {todo.priority.Priority}{" "}
                    </span>
                  </p>
                  <p className={styles.name}>
                    Status:{" "}
                    <span className={styles.span}>
                      {todo.completed ? "Completed" : "Not Started"}
                    </span>
                  </p>
                  <p className={styles.name}>
                    Created on:{" "}
                    <span className={styles.span}> {todo.date}</span>
                  </p>
                  <p className={styles.name}>
                     Task End Time:{" "}
                    <span className={styles.span}> {todo.date}</span>
                  </p>
                </div>

                <div className={styles.editContianer}>
                  <Button
                    lable="Complated"
                    variant="succsses"
                    onClick={() => addCompletedTask(todo.id)}
                    disabled={todo.completed}
                  />
                  <Button lable="Edit Task" variant="warning" />
                  <Button
                    lable="Delete Task"
                    variant="error"
                    onClick={() => removeTodo(todo.id)}
                  />
                </div>

                
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
