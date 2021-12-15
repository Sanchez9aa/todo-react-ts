import React, { FC, useState } from 'react';
import { MainBody, MainTitle, GlobalStyles } from './main.styles'
import ToDoInput from '../todoInput/ToDoInput';
import {TaskModel} from '../taskList/model'
import Task from '../taskList/TaskList';


const Main: FC = () => {

  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<TaskModel[]>([])

  return (
    <>
      <GlobalStyles />
      <MainBody>
        <MainTitle>To Do</MainTitle>
        <ToDoInput task={task} setTask={setTask} setTasks={setTasks} tasks={tasks} />
        <Task tasks={tasks} />
      </MainBody>

    </>
  );
}

export default Main