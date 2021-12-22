import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid';
//Importing styles
import { TodoForm } from './todoInput.style'
//Importing types
import { Props } from './model'


const ToDoInput: FC<Props> = ({task, setTask, setTasks, tasks}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value)
    }

    const handleAdd = (e:React.FormEvent): void => {
        e.preventDefault()
        if(task){
            setTasks([ ...tasks, {id: uuidv4(), task, isDone: false}])   
        }
        setTask("")
    }

    return (
        <TodoForm onSubmit={(e: React.FormEvent) => handleAdd(e)}>
            <input placeholder="Enter a task" value={task} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
            <button onClick={(e:React.FormEvent) => handleAdd(e)}>
                Add
            </button>
        </TodoForm>
    )
}

export default ToDoInput