import React, { FC } from 'react'
import { TaskModel } from './model'
import { StyledTask } from './TaskList.style'
import Task from '../task/Task'

interface Tasks {
  tasks: TaskModel[],
  setTasks: any,
}

const TaskList: FC<Tasks> = ({ tasks, setTasks }) => {

  const handleIsDone = (id: number) => {
    console.log()
    setTasks(
      tasks.map((task: TaskModel) => 
        task.id === id ? {...task, isDone: !task.isDone} : task
      )
    )
  }
  return (
    <StyledTask>
      {console.log(tasks)}
      {tasks.map(x => <Task key={x.id} task={x} handleIsDone={handleIsDone}/>)}
    </StyledTask>
  )
}

export default TaskList
