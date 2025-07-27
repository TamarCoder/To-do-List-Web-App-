"use client";
import { useState } from "react";
import Icon from "../components/Icon/Icon";
import { IconName } from "../components/Icon/Icon.types";
import styles from "./page.module.scss";

export default function VitalTasks() {
  const [selectedTask, setSelectedTask] = useState("dog");
  const [checkedItems, setCheckedItems] = useState({});

  const tasks = {
    dog: {
      title: "Walk the dog",
      priority: "Extreme",
      status: "Not Started",
      date: "20/06/2023",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop&crop=face",
      description: "Take the dog to the park and bring treats as well.",
      extended:
        "Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!",
      checklist: [
        "Listen to a podcast or audiobook",
        "Practice mindfulness or meditation",
        "Take photos of interesting sights along the way",
        "Practice obedience training with your dog",
        "Chat with neighbors or other dog walkers",
        "Listen to music or an upbeat playlist",
      ],
    },
    hospital: {
      title: "Take grandma to hospital",
      priority: "Extreme",
      status: "In Progress",
      date: "20/08/2025",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop",
      description:
        "Go back home and take grandma to the hospital for her appointment.",
      extended:
        "Make sure to bring all her medical documents, insurance cards, and a list of current medications. Schedule the appointment for early morning to avoid traffic and ensure she's comfortable during the visit.",
      checklist: [
        "Gather all medical documents",
        "Check insurance coverage",
        "Prepare medication list",
        "Arrange comfortable transportation",
        "Confirm appointment time",
        "Pack snacks and water",
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

          <div className={styles.taskCard}>
            <div className={styles.taskHeader}>
              <h3 className={styles.taskTitle}>Walk the dog</h3>
              <button className={styles.menuBtn}>⋯</button>
            </div>
            <div className={styles.taskContent}>
              <div className={styles.taskText}>
                Take the dog to the park and bring treats as well.....
              </div>
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop&crop=face"
                alt="Dog"
                className={styles.taskImage}
              />
            </div>
            <div className={styles.taskMeta}>
              <div className={styles.metaItem}>
                Priority:{" "}
                <span className={styles.priorityModerate}>Moderate</span>
              </div>
              <div className={styles.metaItem}>
                Status:{" "}
                <span className="status-badge status-not-started">
                  Not Started
                </span>
              </div>
              <div className={styles.metaItem}>📅 20/06/2023</div>
            </div>
          </div>
          <div className={styles.taskCard}>
            <div className={styles.taskHeader}>
              <h3 className={styles.taskTitle}>Walk the dog</h3>
              <button className={styles.menuBtn}>⋯</button>
            </div>
            <div className={styles.taskContent}>
              <div className={styles.taskText}>
                Take the dog to the park and bring treats as well.....
              </div>
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop&crop=face"
                alt="Dog"
                className={styles.taskImage}
              />
            </div>
            <div className={styles.taskMeta}>
              <div className={styles.metaItem}>
                Priority:{" "}
                <span className={styles.priorityModerate}>Moderate</span>
              </div>
              <div className={styles.metaItem}>
                Status:{" "}
                <span className="status-badge status-not-started">
                  Not Started
                </span>
              </div>
              <div className={styles.metaItem}>📅 20/06/2023</div>
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <div className={styles.vitalTaskDetail}>
          <div className={styles.detailHeader}>
            <div className={styles.detailInfo}>
              <h1> Walk the dog</h1>
              <p>
                Priority: <span className={styles.getPriorityClass}></span>
              </p>
              <p>
                Status: <span> </span>
              </p>
              <p style={{ color: "#a0aec0", fontSize: "13px" }}>
                Created on: <span> </span>
              </p>
            </div>
          </div>

          <div className={styles.detailDescription}>
            <p> Take the dog to the park and bring treats as well.</p>
            <p>
              {" "}
              Take Luffy and Jiro for a leisurely stroll around the
              neighborhood. Enjoy the fresh air and give them the exercise and
              mental stimulation they need for a happy and healthy day. Don't
              forget to bring along squeaky and fluffy for some extra fun along
              the way!
            </p>
          </div>

          <div className={styles.taskChecklist}>
            <h3 className={styles.checklistTitle}>Task Checklist</h3>
            <ul className={styles.checklist}>
              <li className={styles.checklistItem}>
                <div className={styles.checkbox}></div>
                <span className={styles.checklistText}>
                  Listen to a podcast or audiobook{" "}
                </span>
              </li>
              <li className={styles.checklistItem}>
                <div className={styles.checkbox}></div>
                <span className={styles.checklistText}>
                  Practice mindfulness or meditation
                </span>
              </li>

              <li className={styles.checklistItem}>
                <div className={styles.checkbox}></div>
                <span className={styles.checklistText}>
                  Take photos of interesting sights along the way
                </span>
              </li>
              <li className={styles.checklistItem}>
                <div className={styles.checkbox}></div>
                <span className={styles.checklistText}>
                  Practice obedience training with your dog
                </span>
              </li>
              <li className={styles.checklistItem}>
                <div className={styles.checkbox}></div>
                <span className={styles.checklistText}>
                  Chat with neighbors or other dog walkers
                </span>
              </li>
              <li className={styles.checklistItem}>
                <div className={styles.checkbox}></div>
                <span className={styles.checklistText}>
                  Listen to music or an upbeat playlist
                </span>
              </li>
            </ul>
          </div>

          <div className="actionButtons"></div>
        </div>
      </div>
    </div>
  );
}
