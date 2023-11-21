import { createSlice } from "@reduxjs/toolkit";

export const AddTaskSlice= createSlice({
    name:"addTask",
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
