import { createContext, useState, useEffect } from "react";

import {
  getTaskRequest,
  createTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from "../api/tasks";
import { Task, CreateTask, UpdateTask } from "../interfaces/task.interface";

interface TaskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id: string, task: UpdateTask) => Promise<void>;
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  //FUNCION PARA CREAR UNA TAREA Y QUE SE ACTUALICE EN EL NAVEGADOR FRONT
  const createTask = async (task: CreateTask) => {
    const res = await createTaskRequest(task);
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  //FUNCION PARA ELIMINAAR UNA TAREA Y QUE SE QUITE EN EL NAVEGADOR FRONT
  const deleteTask = async (id: string) => {
    const res = await deleteTaskRequest(id);

    if (res.status === 204) {
      setTasks(tasks.filter((task) => task._id !== id));
    }
  };

  //FUNCION PARA ACTUALIZAR UNA TAREA
  const updateTask = async (id: string, task: UpdateTask) => {
    //Actualiza el backend
    const res = await updateTaskRequest(id, task);
    const data = await res.json();

    console.log(data);
    
    //Actualiza el frontend
    setTasks(
      tasks.map((task) => (task._id === id ? { ...task, ...data } : task))
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
