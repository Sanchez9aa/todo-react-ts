import React, { FC } from 'react'
import { TodoDiv } from './todoInput.style'
import { Props } from './model'
import { v4 as uuidv4 } from 'uuid';


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
        <TodoDiv >
            <input placeholder="Enter a task" value={task} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
            <button onClick={(e:React.FormEvent) => handleAdd(e)}>
                Add
            </button>
        </TodoDiv>
    )
}

export default ToDoInput