import { ITask } from '../../../models/Task';
import { useTask } from '../hooks/useTask';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

export default function TaskList() {
  const { tasks, task, removeTask, saveTask, handleInputChange } = useTask()

  return (
    <section className='mx-auto w-10/12 py-10 flex gap-10'>
      <TaskForm
        task={task}
        saveTask={saveTask}
        handleInputChange={handleInputChange}
      />
      <article className='grid grid-cols-3 gap-10 w-9/12'>
        {
          tasks && tasks.length > 0
            ?
              tasks.map((task: ITask, index: number) => 
                <TaskCard
                  key={index}
                  task={task}
                  removeTask={removeTask}
                />
              )
            : <p>No hay tareas registradas.</p>
        }
      </article>
    </section>
  )
}