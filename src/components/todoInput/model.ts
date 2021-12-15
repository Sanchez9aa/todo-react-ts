import { TaskModel } from "../taskList/model";

export interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>
  tasks: TaskModel[]
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>
}