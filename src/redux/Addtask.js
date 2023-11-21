import { createSlice } from "@reduxjs/toolkit";
import Database from "../Database/Taskdatabase";

export const AddTaskSlice= createSlice({
    name:"add_a_task",
    initialState:{
        isPopupOpen: false,
    },
    reducers:{
        openPopup:(state)=>{
            state.isPopupOpen=true
        }, 
        closePopup:(state)=>{
            state.isPopupOpen=false
        },
    },
},
)
export const {openPopup,closePopup}= AddTaskSlice.actions
export default AddTaskSlice.reducer
