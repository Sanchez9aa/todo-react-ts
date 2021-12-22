import React, { FC } from 'react'
//Importing components
import Task from '../task/Task'
//Importing Styles
import { StyledTask } from './TaskList.style'
//Importing types
import { Tasks } from './model'

const TaskList: FC<Tasks> = ({ tasks, setTasks }) => {

  return (
      <StyledTask>
        {tasks.map(x => <Task key={x.id} task={x} setTasks={setTasks} tasks={tasks}/>)}
      </StyledTask>
  )
}

export default TaskList
