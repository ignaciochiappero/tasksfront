import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContext";
import Logo from "./components/Logo";

//ICONOS
import { SiMongodb, SiTypescript, SiNestjs, SiTailwindcss, SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-zinc-900 text-white flex items-center justify-center p-5 flex-grow">
        <div className="bg-gray-950 p-4 rounded-lg lg:w-2/5 md:w-3/5 sm:w-4/5 max-sm:w-4/5">

          <div className=" flex justify-center items-center gap-4 p-1">

            <Logo />

            <div className="flex justify-center items-center">
              <h1 className=" text-3xl font-bold text-center flex my-2 break-words sm:whitespace-nowrap">
                Lista de Tareas
              </h1>
            </div>

            <Logo />
          </div>
          
          <TaskProvider>
            <TaskForm />
            <TaskList />
          </TaskProvider>
        </div>
      </div>

      {/* CAJA DE INFO */}
      <footer className="text-gray-400 text-center my-4">
        <div className="flex-col">
          <div>
            <h1>Desarrollado por Nacho <span className="text-orange-500">Dev</span></h1>
          </div>
          
          <div className="flex justify-center gap-3 m-2">
            <div>
              <SiNestjs className="text-rose-600" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <SiVite className="text-yellow-500" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <SiTailwindcss className="text-cyan-500" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <SiTypescript className="text-blue-600" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <SiMongodb className="text-green-600" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <FaReact className="text-blue-400" />
            </div>
          </div>
          <div>
            <h2>Santa Fe - Argentina - 2024</h2>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
