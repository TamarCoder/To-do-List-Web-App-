"use client";
import { useState } from "react";
import Icon from "../components/Icon/Icon";
import { IconName } from "../components/Icon/Icon.types";
import styles from "./page.module.scss";
import Button from "../components/Button/Button";

export default function VitalTasks() {
  const [selectedTask, setSelectedTask] = useState("Module");
  const [checkedItems, setCheckedItems] = useState({});

  const tasks = {
    Module: {
      title: "Create Playlist Module",
      priority: "Extreme",
      status: "Not Started",
      date: "01.08.2025",
      description:
        "Use class-validator to validate input data for creating and updating playlists..",
      extended:
        "Define the Playlist entity with the necessary fields and relationships using TypeORM.",
      checklist: [
        " Implement an API endpoint to add new playlists",
        "Implement an API endpoint to retrieve all playlists",
        "Implement an API endpoint to retrieve a single playlist by its ID",
        "Practice obedience training with your dog",
        "Implement an API endpoint to update an existing playlist",
        "Implement an API endpoint to delete a playlist by its ID",
      ],
    },
    hospCreate: {
      title: "Create API Endpoints",
      priority: "Extreme",
      status: "In Progress",
      date: "20/08/2025",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop",
      description:
        "Go back home and take grandma to the hospital for her appointment.",
      extended:
        "Define the Listener entity with the necessary fields and relationships using TypeORM.",
      checklist: [
        " Implement an API endpoint to add new listeners.",
        "Implement an API endpoint to retrieve all listeners",
        "Implement an API endpoint to retrieve a single listener by its ID.",
        "Implement an API endpoint to update an existing listener.n",
        "Implement an API endpoint to delete a listener by its ID.",
      ],
    },
  };

  return (
    <div className={styles.vitalTasksContainer}>
      <div
        className={styles.container}
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Task List Panel */}
        <div className={styles.vitalTasks}>
          <h1 className={styles.sectionTitle}>Vital Tasks</h1>

          {Object.entries(tasks).map(([key, task]) => (
            <div
              key={key}
              className={styles.taskCard}
              onClick={() => setSelectedTask(key)}
            >
              <div className={styles.taskHeader}>
                <h3 className={styles.taskTitle}>{task.title}</h3>
                <button className={styles.menuBtn}>⋯</button>
              </div>
              <div className={styles.taskContent}>
                <div className={styles.taskText}>
                  {task.description.slice(0, 60)}...
                </div>
              </div>
              <div className={styles.taskMeta}>
                <div className={styles.metaItem}>
                  Priority:{" "}
                  <span className={styles[`priority${task.priority}`]}>
                    {task.priority}
                  </span>
                </div>
                <div className={styles.metaItem}>
                  Status:{" "}
                  <span
                    className={`status-badge status-${task.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {task.status}
                  </span>
                </div>
                <div className={styles.metaItem}>📅 {task.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        <div className={styles.vitalTaskDetail}>
          <div className={styles.detailHeader}>
            <div className={styles.detailInfo}>
              <h1> </h1>
              <p>Priority: </p>
              <p>
                Status: <span> </span>
              </p>
              <p style={{ color: "#a0aec0", fontSize: "13px" }}>
                Created on: <span> </span>
              </p>
            </div>
          </div>

          <div className={styles.detailDescription}>
            <p> </p>
            <p> </p>
          </div>

          <div className={styles.taskChecklist}>
            <h3 className={styles.checklistTitle}>Task Checklist</h3>
            <ul className={styles.checklist}>
              <li className={styles.checklistItem}>
                <div className={styles.checkbox}></div>
                <span className={styles.checklistText}></span>
              </li>
            </ul>
          </div>

          <div className={styles.editContianer}>
            <Button lable="Completed" variant="succsses" />
            <Button lable="Edit Task" variant="warning" />
            <Button lable="Delete Task" variant="error" />
          </div>
        </div>
      </div>
    </div>
  );
}
