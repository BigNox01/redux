import { createSlice } from "@reduxjs/toolkit";
import Database from "../Database/Taskdatabase";
const initialState={
    tasks:Database
}
export const ListAddedTasks = createSlice({
  name: "ListTasks",
  initialState,
  reducers: {
    DescriptionAdded: (state, action) => {
      const { description } = action.payload;
      // Calculate the new ID based on the last ID in the database
      const lastId =
        state.tasks.length > 0
          ? parseInt(state.tasks[state.tasks.length - 1].id)
          : 0;
      const newId = (lastId + 1).toString();
      const newTask = {
        id: newId,
        description,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    // the editing description reducer
    EditTask: (state, action) => {
      const { taskId, newDescription } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      );
    },
    ToggleEdit: (state, action) => {
      const { taskId, isEditing } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, isEditing } : task
      );
      // Instead of directly modifying state, create a new array:
      state.tasks = [...state.tasks];
    },
    // Toggle completion status
    ToggleCompletion: (state, action) => {
      const { taskId } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed;
      }
    },
    // Set a flag to show completed tasks in the filtered data
    ShowCompletedTasks: (state, action) => {
      const { showCompleted } = action.payload;
      state.showCompleted = showCompleted;
    },
  },
});
export const {DescriptionAdded,EditTask,ToggleEdit,ToggleCompletion,ShowCompletedTasks}=ListAddedTasks.actions;
export default ListAddedTasks.reducer;