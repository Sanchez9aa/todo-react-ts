import React, { FC } from 'react'
import { TodoInputStyle, AddTask } from './todoInput.style'

const ToDoInput = () => {
    return (
        <>
            <TodoInputStyle />
            <AddTask>
                Go
            </AddTask>
        </>
    )
}

export default ToDoInput