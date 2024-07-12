import { useTasks } from "../context/useTasks";
import { Task } from "../interfaces/task.interface";
import { IoCheckmarkDone, IoTrash } from "react-icons/io5"; 

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTasks();

  return (
    <div
  key={task._id}
  className="bg-gray-900 p-2 my-2 flex flex-col sm:flex-row justify-between hover:bg-gray-800 hover:cursor-pointer"
>
  <div className="flex-1 min-w-0">
    <h1 className="text-white">{task.title}</h1>
    <p className="text-gray-400 break-words">{task.description}</p>
  </div>

  <div className="flex gap-x-2 mt-2 sm:mt-0">
    {/* BOTON CONDICIONAL DONE */}
    {task.done ? (
      // si done está en true, mostrar verde el ícono
      <IoCheckmarkDone
        className="text-green-500"
        onClick={() => {
          updateTask(task._id, {
            done: !task.done,
          });
        }}
      />
    ) : (
      // si done está en false, mostrar gris el ícono
      <IoCheckmarkDone
        className="text-gray-500"
        onClick={() => {
          updateTask(task._id, {
            done: !task.done,
          });
        }}
      />
    )}

    {/* BOTON TACHITO BASURA */}
    <IoTrash
      onClick={async () => {
        if (
          !window.confirm("Estás seguro de que querés eliminar esta tarea?")
        )
          return;

        await deleteTask(task._id);
      }}
    />
  </div>
</div>
  );
}

export default TaskItem;
