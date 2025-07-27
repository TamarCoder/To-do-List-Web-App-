"use client";
import { create } from "zustand";
import { Todo } from "../components/ToDo/Todo";
// რისგან შედგება ერტი ცალი ტასქი
export type TodoProperty = {
  id: number;
  title: string;
  text: string;
  date: string;
  priority: Priority;
  completed: boolean;
};

export type AddTodoArgs = {
  id: number;
  title: string;
  text: string;
  date: string;
  priority: Priority;
  completed: boolean;
};
//თასქი პრიორიტეტულობა
export type Priority = {
  Priority: "Extreme" | "Moderate" | "Low";
};
// რომელი ფუნქციის მიხედვით უნდა დაემატოს ჩემი თასქი;
export type TodoStore = {
  todos: AddTodoArgs[];
  completedTasks: TodoProperty[];
  addTodo: (todo: AddTodoArgs) => void;
  removeTodo: (id: number) => void;
  addCompletedTask: (id: number) => void;
  removeCompaleteTask: (id: number) => void;
};

export const isTodo = create<TodoStore>((set, get) => ({
  todos: [],
  completedTasks: [],

  addTodo: ({ text, title, date, priority }) => {
    const newTodo: TodoProperty = {
      id: Date.now(),
      text,
      title,
      date,
      priority,
      completed: false,
    };
    set({ todos: [...get().todos, newTodo] });
    console.log(newTodo);
  },

  removeTodo: (id) => {
    const filtered = get().todos.filter((todo) => todo.id !== id);
    set({ todos: filtered });
    console.log("is deleted");
  },
  addCompletedTask: (id) => {
    const todo = get().todos.find((e) => e.id === id);
    if (todo) {
      // Mark as completed and add to completedTasks
      const completedTodo = { ...todo, completed: true };

      // Remove from todos and add to completedTasks
      const filteredTodos = get().todos.filter((e) => e.id !== id);

      const updatedCompleted = [...get().completedTasks, completedTodo];
      set({
        todos: filteredTodos,
        completedTasks: updatedCompleted,
      });
    }
  },
  removeCompaleteTask: (id) => {
    const filtered = get().completedTasks.filter((todo) => todo.id !== id);
    set({ completedTasks: filtered });
  },
}));
