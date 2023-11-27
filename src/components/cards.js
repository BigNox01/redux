import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import { useDispatch, useSelector } from "react-redux";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SwitchControlled from "../buttons/logos/switch";
import { EditTask,ToggleEdit } from "../redux/listTask";

export default function BasicCard({task}) {
  const dispatch = useDispatch();
  // adding the functionality that edits the card description
  const handleEditClick=(taskId)=>{
    dispatch(ToggleEdit({taskId,isEditing:true}))
  }
  const handleEditDescription=(taskId,newDescription)=>{
        dispatch(EditTask({ taskId, newDescription }));
        dispatch(ToggleEdit({ taskId, isEditing: false }));
  }
  let blurTimeout
const handleBlur = (taskId,event) => {
  const { relatedTarget } = event;
  if (!relatedTarget || !event.currentTarget.contains(relatedTarget)) {
    blurTimeout = setTimeout(() => {
      dispatch(ToggleEdit({ taskId, isEditing: false }));
    }, 200); // Adjust the delay (in milliseconds) as needed
  }
};
//********************************************************** */
  const handleFocus = () => {
    clearTimeout(blurTimeout);
  };
  //***************************** */
  const Tasks = useSelector((state) => state.ListTasks.tasks);
  return Tasks.map((task) => (
    <Card sx={{ width: 320 }} key={task.id}>
      <div>
        {/*....................................*/}
        {task.isEditing ? (
          <input
            type="text"
            value={task.description}
            onChange={(e) => handleEditDescription(task.id, e.target.value)}
            onBlur={() => handleBlur(task.id)}
            onFocus={handleFocus}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleEditDescription(task.id, e.target.value);
                clearTimeout(blurTimeout); // Clear the timeout
              }
            }}
          />
        ) : (
          <Typography level="title-lg">{task.description}</Typography>
        )}
        {/*....................................*/}
        {/*the delete button*/}
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <DeleteRoundedIcon fontSize="small" />
        </IconButton>
      </div>
      <div className="card-body">
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div className="card-options">
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">Completed</Typography>
              <SwitchControlled />
            </div>
            <Button
              variant="solid"
              size="md"
              color="primary"
              onClick={() => handleEditClick(task.id)}
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Edit
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  ));
}