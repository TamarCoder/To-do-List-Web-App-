"use client";
import { useState } from "react";
import { TaskPopap } from "../AddTaskPopap/TaskPopap";
import { TaskStatus } from "../TaskStatus/TaskStatus";
import { Todo } from "../ToDo/Todo";
import { Banner } from "../WelcomeBanner/Banner";
import styles from "./Main.module.scss";

export default function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className={styles.mainContainer}>
      <Banner />
      <div className={styles.taskWrapper}>
        <Todo  onAddTaskClick={() => setIsPopupOpen(true)} />
        <TaskStatus />
      </div>

      {isPopupOpen && <TaskPopap onClose={() => setIsPopupOpen(false)} />}
    </main>
  );
}
