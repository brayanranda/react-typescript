import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { ITask } from '../../../models/Task';

const initialState: ITask = {
    id: 0,
    title: "",
    description: "",
}

export const useTask = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [task, setTask] = useState(initialState);
    const inputRef = useRef<HTMLInputElement>()

    const handleInputChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({...task, [name]: value})
    }

    const getNumberRandom = (): number => {
        return new Date().getTime();
    }

    const saveTask = () => {
        setTasks([...tasks, {...task, id: getNumberRandom()}])
        setTask(initialState)
        inputRef.current?.focus()
    }

    const removeTask = (id:number): void => {
        const newTasks: ITask[] = [...tasks]
        setTasks(newTasks.filter(item => item.id !== id))
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    return { task, tasks, removeTask, setTask, handleInputChange, saveTask, inputRef }
}
