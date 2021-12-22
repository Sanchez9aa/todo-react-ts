export interface TaskModel{
  id: string,
  task: string,
  isDone: boolean 
}

export type Tasks =  {
  tasks: TaskModel[],
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>,
}