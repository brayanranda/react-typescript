import { ChangeEvent } from "react";
import { ITask } from "../../../models/Task";

interface Props {
  handleInputChange: (target: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  saveTask: () => void,
  task: ITask,
}

export default function TaskForm({ handleInputChange, saveTask, task }: Props) {

  return (
    <article className="p-4 bg-slate-900 rounded-md flex flex-col space-y-5 text-black w-3/12">
      <h3 className="mb-2 font-bold text-2xl text-white">Registrar Task</h3>
      <input
        name="title"
        type="text"
        value={task.title}
        placeholder="Title"
        className="p-2 rounded-md"
        onChange={handleInputChange}
        autoFocus
      />
      <textarea
        name="description"
        value={task.description}
        className="p-2 rounded-md"
        placeholder="Description"
        onChange={handleInputChange}
      >
      </textarea>
      <button
        onClick={saveTask}
        className="bg-green-400 rounded-md p-2 font-bold"
      >
        Guardar
      </button>
    </article>
  )
}
