import React, { FC } from 'react'
import {TaskModel} from '../taskList/model'
import {StyledSingleTask} from './task.style'
import {AiFillDelete, AiOutlineCheck} from 'react-icons/ai'
import {FiType} from 'react-icons/fi'

interface Props {
  task: TaskModel,
  handleIsDone: any
}

const Task: FC<Props> = ({task, handleIsDone}) => {
  console.log(task)
  return (
    <>
    {
      task.isDone ? (
        <StyledSingleTask id={task.id}><s>{task.task}</s><AiFillDelete/> <span><AiOutlineCheck onClick={() => handleIsDone(task.id)}/></span> <span><FiType/></span></StyledSingleTask>
      ): (
        <StyledSingleTask id={task.id}><span>{task.task}</span><AiFillDelete/> <span><AiOutlineCheck onClick={() => handleIsDone(task.id)}/></span> <span><FiType/></span></StyledSingleTask>
      )
    }
    </>
  )
}

export default Task
