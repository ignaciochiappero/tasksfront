export interface Task {
  _id: string;
  title: string;
  description?: string;
  done?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateTask = Omit<Task, '_id' | 'createdAt' | 'updatedAt'>;

//Este nuevo tipo hereda los datos del tipo anterior creado
export type UpdateTask = Partial<CreateTask>;