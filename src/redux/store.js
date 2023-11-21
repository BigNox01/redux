import {configureStore} from "@reduxjs/toolkit"
import { AddTaskSlice } from "./Addtask"

export default configureStore({
    reducer:{
        addTask:AddTaskSlice.reducer
    },
})