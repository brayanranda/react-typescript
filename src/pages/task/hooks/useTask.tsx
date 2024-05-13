import { useState, ChangeEvent } from 'react';
import { ITask } from '../../../models/Task';

const initialState: ITask = {
    id: 0,
    title: "",
    description: "",
}

export const useTask = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [task, setTask] = useState(initialState);

    const handleInputChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({...task, [name]: value})
    }

    const saveTask = () => {
        setTasks([...tasks, task])
        setTask(initialState)
    }

    const removeTask = (id:number): void => {
        const newTasks: ITask[] = [...tasks]
        setTasks(newTasks.filter(item => item.id !== id))
    }

    return { task, tasks, removeTask, setTask, handleInputChange, saveTask }
}
