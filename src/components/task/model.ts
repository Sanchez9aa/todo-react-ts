import {TaskModel} from '../taskList/model'

export type Props = {
  task: TaskModel,
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>,
  tasks: TaskModel[]
}