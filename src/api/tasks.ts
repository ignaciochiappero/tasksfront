import { CreateTask, UpdateTask } from "../interfaces/task.interface";

const URL = import.meta.env.VITE_API || "http://localhost:3000"
const API = `${URL}/api`;

export const createTaskRequest = (task: CreateTask) =>
  fetch(`${API}/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  });

export const getTaskRequest = () => fetch(`${API}/tasks`);

export const deleteTaskRequest = (id: string) =>
  fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
  });

export const updateTaskRequest = (id: string, task: UpdateTask) =>
  fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
