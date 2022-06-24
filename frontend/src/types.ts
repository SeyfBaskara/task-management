export interface ITasks {
   title: string
   completed: boolean
   _id?: string
   subTask?: ISubTask[]
}
export interface IUpdate {
   title?: string
   completed?: boolean
   _id?: string
}

export interface ISubTask {
   description: string
   completed: boolean
   price: number
   _id?: string
   taskID?: string
}

export interface ISubUpdate {
   description?: string
   price?: number
   completed?: boolean
   _id?: string
   taskID?: string
}
