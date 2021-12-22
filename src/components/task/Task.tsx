import React, { FC, useState } from 'react'
//Importing styles
import { StyledSingleTask, SvgWrapper } from './task.style'
//Importing icons
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai'
import { FiType } from 'react-icons/fi'
//Importing types
import { Props } from './model'
import { TaskModel } from '../taskList/model'


const Task: FC<Props> = ({ task, setTasks, tasks }) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTask, setEditTask] = useState<string>(task.task)

  const handleIsDone = (id: string) => {
    setTasks(
      tasks.map((task: TaskModel) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
  }

  const handleDelete = (id: string) => {
    setTasks(
      tasks.filter((task) =>
        task.id !== id
      )
    )
  }

  const handleUpdate = (e: React.FormEvent, editTask: string, id: string) => {
    e.preventDefault()
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) {
          return task
        } else {
          return { ...task, task: editTask }
        }
      })
    )
    setEdit(!edit)
  }

  const handleEditTask = (e: React.FormEvent<HTMLInputElement>) => {
    setEditTask(e.currentTarget.value)
  }

  return (
    <>
      <form onSubmit={(e) => handleUpdate(e, editTask, task.id)}>
        <StyledSingleTask>
          {
            edit
              ? <input value={editTask} onChange={(e: React.FormEvent<HTMLInputElement>) => handleEditTask(e)} />
              : task.isDone ? (
                <span>
                  <s>{task.task}</s>
                </span>
              ) : (
                  <span>{task.task}</span>
              )
          }
          <SvgWrapper>
            <AiFillDelete onClick={() => handleDelete(task.id)} />
            <AiOutlineCheck onClick={() => handleIsDone(task.id)} />
            <FiType onClick={() => {
              if (!edit && !task.isDone) {
                setEdit(!edit)
              }
            }} />
          </SvgWrapper>
        </StyledSingleTask>
      </form>
    </>
  )
}

export default Task
