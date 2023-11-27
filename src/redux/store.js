import {configureStore} from "@reduxjs/toolkit"
import { AddTaskSlice } from "./Addtask"
import  { ListAddedTasks } from "./listTask"
import  { searchSlice } from "./searchRe"
export default configureStore({
    reducer:{
        addTask:AddTaskSlice.reducer,
        ListTasks:ListAddedTasks.reducer,
        search:searchSlice.reducer
    },
})