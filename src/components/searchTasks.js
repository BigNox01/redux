import React from "react";
import { useDispatch } from "react-redux";
import { ShowCompletedTasks } from "../redux/listTask";

const SearchCompletedTask = () => {
  const dispatch = useDispatch();

  const handleShowCompletedTasks = (showCompleted) => {
    dispatch(ShowCompletedTasks({ showCompleted }));
  };

  return (
    <div>
      <label>
        Show Completed Tasks:
        <input
          type="checkbox"
          onChange={(e) => handleShowCompletedTasks(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default SearchCompletedTask;
