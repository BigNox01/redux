import {configureStore} from "@reduxjs/toolkit"
import { AddTaskSlice } from "./Addtask"
import  { ListAddedTasks } from "./listTask"

export default configureStore({
    reducer:{
        addTask:AddTaskSlice.reducer,
        ListTasks:ListAddedTasks.reducer
    },
})