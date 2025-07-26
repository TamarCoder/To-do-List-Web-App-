import { ButtonProps } from "../Button/Button.types";
import styles from "./TaskStatus.module.scss";

type StatusColor = "green" | "blue" | "red" | "grey";

interface StatusItem {
  id: string;
  label: string;
  color: StatusColor;
  icon: string;
  progress: number;
}
const colors: Record<StatusColor, string> = {
  green: "#10b981",
  blue: "#3b82f6",
  red: "#ef4444",
  grey: "#6b7280",
};

const statusItems: StatusItem[] = [
  {
    id: "completed",
    label: "Completed",
    color: "green",
    icon: "✓",
    progress: 100,
  },
  {
    id: "in-progress",
    label: "In Progress",
    color: "blue",
    icon: "◐",
    progress: 60,
  },
  {
    id: "not-started",
    label: "Not Started",
    color: "red",
    icon: "○",
    progress: 0,
  },
];

const getColorStyles = (color: StatusColor) => ({
  stroke: colors[color],
  textColor: colors[color],
  dotColor: colors[color],
});

export const TaskStatus = (props: ButtonProps) => {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.taskStatus}>
        <div className={styles.boxLeft}>
          <div className={styles.iconWrapper}>
            <svg
              className={styles.headerIcon}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className={styles.headerText}>Task Status</p>
        </div>
        <div className={styles.resultContainer}>
          {statusItems.map((item, index) => {
            const colorStyle = getColorStyles(item.color);
            return (
              <div
                key={item.id}
                className={styles.wrapperHover}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.circleContainer}>
                  <svg className={styles.progressCircle} viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      className={styles.backgroundCircle}
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={colorStyle.stroke}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 40 * (1 - item.progress / 100)
                      }`}
                      className={styles.progressStroke}
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  </svg>
                  <div
                    className={styles.centerIcon}
                    style={{ color: colorStyle.textColor }}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className={styles.dots}>
                  <div
                    className={styles.statusDot}
                    style={{ backgroundColor: colorStyle.dotColor }}
                  ></div>
                  <p className="dotsText">{item.label}</p>
                </div>

                <div className={styles.progressText}>
                  {item.progress}% Complete
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Progress */}
        <div className={styles.overallProgress}>
          <div className={styles.progressHeader}>
            <span className={styles.progressHeaderText}>Overall Progress</span>
            <span className={styles.progressHeaderPercent}>53%</span>
          </div>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
