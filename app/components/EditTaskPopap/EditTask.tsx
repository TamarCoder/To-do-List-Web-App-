"use client";
import { stat } from "fs";
import { isTodo, Priority } from "../../store/task";
import Button from "../Button/Button";
import { ButtonType } from "../Button/Button.types";
import Input from "../Input/Input";
import { InputProps } from "../Input/input.type";
import styles from "./EditTask.module.scss";
import { use, useState } from "react";
import { text } from "stream/consumers";

type EditTaskPopapProps = {
  onClose: () => void;
  InputProps?: InputProps;
};

export const EditTask = (props: EditTaskPopapProps) => {
  const todos = isTodo((state) => state.todos);
  const addTodo = isTodo((state) => state.addTodo);

  const [isTitle, setIsTiTle] = useState("");
  const [isDate, setIsDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const [isText, setIsText] = useState("");
  const [isPriority, setIsPriority] = useState<Priority>({
    Priority: "Low",
  });

  const onClick = () => {
    console.log("clicked");
    addTodo({
      title: isTitle,
      text: isText,
      date: isDate,
      priority: isPriority,
    });

    setIsTiTle("");
    setIsText("");
    setIsDate("");
    setEndTime(""), setIsPriority({ Priority: "Low" });

    props.onClose();
  };

  return (
    <div className={styles.popupOverlay} id="popupOverlay">
      <section className={styles.container}>
        <div className={styles.top}>
          <p className={styles.title}>Edit Tasks </p>
          <button className={styles.close} onClick={props.onClose}>
            Go Back
          </button>
        </div>

        <form className={styles.forms}>
          <div className={styles.wrapper}>
            <label htmlFor="text" className={styles.lable}>
              Title
            </label>
            <Input
              id="text"
              type="text"
              name="text"
              placeholder="Enter Task Title"
              value={isTitle}
              onChange={(e) => setIsTiTle(e.target.value)}
            />
          </div>

          <div className={styles.wrapper}>
            <label htmlFor="data" className={styles.lable}>
              Task Start Time
            </label>
            <Input
              id="date"
              type="date"
              name="date"
              placeholder="Select a date"
              value={isDate}
              onChange={(e) => setIsDate(e.target.value)}
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="Enddata" className={styles.lable}>
              Task End Time
            </label>
            <Input
              id="Enddata"
              type="date"
              name="Enddata"
              placeholder="Select a date"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>

          <div className={styles.checkWrappers}>
            <label htmlFor="" className={styles.lable}>
              Priority
            </label>
            <div className={styles.status}>
              <div className={styles.box}>
                <label htmlFor="Extreme">Extreme</label>
                <input
                  type="radio"
                  name="priority"
                  value="Extreme"
                  checked={isPriority.Priority === "Extreme"}
                  onChange={(e) =>
                    setIsPriority({
                      Priority: e.target.value as
                        | "Low"
                        | "Moderate"
                        | "Extreme",
                    })
                  }
                />
              </div>
              <div className={styles.box}>
                <label htmlFor="Moderate">Moderate</label>
                <input
                  type="radio"
                  name="priority"
                  value="Moderate"
                  checked={isPriority.Priority === "Moderate"}
                  onChange={(e) =>
                    setIsPriority({
                      Priority: e.target.value as
                        | "Low"
                        | "Moderate"
                        | "Extreme",
                    })
                  }
                />
              </div>
              <div className={styles.box}>
                <label htmlFor="Low">Low</label>
                <input
                  type="radio"
                  name="priority"
                  value="Low"
                  checked={isPriority.Priority === "Low"}
                  onChange={(e) =>
                    setIsPriority({
                      Priority: e.target.value as
                        | "Low"
                        | "Moderate"
                        | "Extreme",
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className={styles.texts}>
            <label htmlFor="" className={styles.lable}>
              Task Description
            </label>
            <textarea
              name="text"
              id="text"
              placeholder="Start writing here....."
              value={isText}
              onChange={(e) => setIsText(e.target.value)}
            />
          </div>
        </form>
        <Button
          lable="Add Tasks"
          variant="primary"
          type={ButtonType.button}
          onClick={onClick}
        />
      </section>
    </div>
  );
};
