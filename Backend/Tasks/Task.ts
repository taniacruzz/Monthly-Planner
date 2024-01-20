 import { TaskType } from "./taskType"

class Task {
    status: boolean
    date: Date 
    type: TaskType

    constructor(status: boolean, date: Date, type: TaskType) {
        this.status = status
        this.date = date
        this.type = type
    }
}