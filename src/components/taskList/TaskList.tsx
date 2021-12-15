import React, { FC } from 'react'
import { TaskModel } from './model'
import {StyledTask} from './TaskList.style'
import Task from '../task/Task'

interface Tasks {
  tasks: TaskModel[]
}

const TaskList: FC<Tasks> = ({tasks}) => {
 return (
  <StyledTask>
    {tasks.map(x => <Task key={x.id} x={x}/>)}
  </StyledTask>
 )
}

export default TaskList
