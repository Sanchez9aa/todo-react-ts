import React, { FC, useState } from 'react';
//Importing components
import ToDoInput from '../todoInput/ToDoInput';
import TaskList from '../taskList/TaskList';
//Importing styles
import { MainBody, GlobalStyles } from './main.styles'
//Importing Types
import {TaskModel} from '../taskList/model'


const Main: FC = () => {

  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<TaskModel[]>([])

  return (
    <>
      <GlobalStyles />
      <MainBody>
        <h1>To Do</h1>
        <ToDoInput task={task} setTask={setTask} setTasks={setTasks} tasks={tasks} />
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </MainBody>

    </>
  );
}

export default Main