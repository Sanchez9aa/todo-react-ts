import React, { FC } from 'react'
import {TaskModel} from '../taskList/model'
import {StyledSingleTask} from './task.style'

interface SingeTask {
  x: TaskModel
}


const Task: FC<SingeTask> = ({x}) => {
  return (
    <StyledSingleTask id={x.id} done={x.isDone}>{x.task}</StyledSingleTask>
  )
}

export default Task
