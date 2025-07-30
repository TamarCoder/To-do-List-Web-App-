"use client";
import { useState } from "react";
import { TaskPopap } from "../AddTaskPopap/TaskPopap";
import { TaskStatus } from "../TaskStatus/TaskStatus";
import { Todo } from "../ToDo/Todo";
import { Banner } from "../WelcomeBanner/Banner";
import styles from "./Main.module.scss";
import { Complate } from "../ComplateTasks/Complate";
import { EditTask } from "../EditTaskPopap/EditTask";

export default function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopap, setIsEditPopap] = useState(false);


  return (
    <main className={styles.mainContainer}>
      <Banner />
      <div className={styles.taskWrapper}>
        <Todo  onAddTaskClick={()=> setIsPopupOpen(true)}   onAddEditClick={() =>setIsEditPopap(true)}/>
        <TaskStatus />
        <Complate/>
      </div>

      {isPopupOpen && <TaskPopap onClose={() => setIsPopupOpen(false)} />}
      {isEditPopap && <EditTask onClose={() => setIsEditPopap(false)} />}

    </main>
  );
}
