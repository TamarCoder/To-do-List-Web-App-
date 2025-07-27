"use client";
import { create } from "zustand";
// რისგან შედგება ერტი ცალი ტასქი
export type TodoProperty = {
  id: number;
  title: string;
  date: string;
  text: string;
  priority: Priority;
};

export type AddTodoArgs = {
  title: string;
  text: string;
  date: string;
  priority: Priority;
};
//თასქი პრიორიტეტულობა
export type Priority = {
  Priority: "Extreme" | "Moderate" | "Low";
};
// რომელი ფუნქციის მიხედვით უნდა დაემატოს ჩემი თასქი;
export type TodoStore = {
  todos: AddTodoArgs[];
  addTodo: (todo: AddTodoArgs) => void;
  
};

export const isTodo = create<TodoStore>((set, get) => ({
  todos: [],

  addTodo: ({ text, title, date, priority }) => {
    const newTodo: TodoProperty = {
      id: Date.now(),
      text,
      title,
      date,
      priority,
    };
    set({ todos: [...get().todos, newTodo] });
    console.log(newTodo);
  },
}));
