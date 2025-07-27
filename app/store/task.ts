"use client";
import { create } from "zustand";
import { Todo } from "../components/ToDo/Todo";
import { persist, createJSONStorage } from "zustand/middleware";

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
  title: string; // Fixed: removed id (auto-generated)
  text: string;
  date: string; 
  priority: Priority;
  // Fixed: removed completed (new todos are always incomplete)
};

//თასქი პრიორიტეტულობა
export type Priority = {
  Priority: "Extreme" | "Moderate" | "Low";
};

// რომელი ფუნქციის მიხედვით უნდა დაემატოს ჩემი თასქი;
export type TodoStore = {
  todos: TodoProperty[]; // Fixed: should be TodoProperty[], not AddTodoArgs[]
  completedTasks: TodoProperty[];
  addTodo: (todo: AddTodoArgs) => void;
  removeTodo: (id: number) => void;
  addCompletedTask: (id: number) => void;
  removeCompleteTask: (id: number) => void; // Fixed typo: removeCompaleteTask -> removeCompleteTask
};

export const isTodo = create<TodoStore>()(
  persist(
    (set, get) => ({
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

      removeCompleteTask: (id) => {
        const filtered = get().completedTasks.filter((todo) => todo.id !== id);
        set({ completedTasks: filtered });
      },
    }),
    // Fixed: persist configuration moved outside the store function
    {
      name: 'todo-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // uses localStorage
      
      // Optional: only persist specific parts of state
      partialize: (state) => ({ 
        todos: state.todos, 
        completedTasks: state.completedTasks 
      }),
      
      // Optional: version for migrations if you change store structure
      version: 1,
    }
  )
);