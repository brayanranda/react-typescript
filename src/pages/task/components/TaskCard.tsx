import { ITask } from "../../../models/Task"

interface Props {
    removeTask: (id:number) => void;
    task: ITask,
}

export default function TaskCard({ task, removeTask }: Props) {

    return (
        <div className="bg-slate-900 p-5 rounded-md transform hover:scale-110 duration-300 hover:bg-slate-700">
            <p>{task.id}</p>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <div className="mt-4">
                <button
                    className="py-1 px-4 bg-red-500 hover:bg-red-800 duration-300 rounded-full"
                    onClick={() => { task.id && removeTask(task.id) }}
                >
                    Borrar
                </button>
            </div>
        </div>
    )
}
