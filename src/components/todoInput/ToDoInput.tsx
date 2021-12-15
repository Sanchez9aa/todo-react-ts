import React, { FC, useRef } from 'react'
import { TodoInputStyle, AddTask, TodoDiv } from './todoInput.style'
import {Props} from './model'

const ToDoInput: FC<Props> = ({task, setTask, setTasks, tasks}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value)
    }

    const handleAdd = (e:React.FormEvent): void => {
        e.preventDefault()
        input.current?.blur()
        if(task){
            setTasks([ ...tasks, {id: Date.now(), task, isDone: false}])
            setTask("")
        }
    }

    const input = useRef<HTMLInputElement>(null)

    return (
        <TodoDiv>
            <TodoInputStyle ref={input} placeholder="Enter a task" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
            <AddTask onClick={(e:React.FormEvent) => handleAdd(e)}>
                Add
            </AddTask>
        </TodoDiv>
    )
}

export default ToDoInput