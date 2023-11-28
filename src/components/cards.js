import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import { useDispatch, useSelector } from "react-redux";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Stack from "@mui/joy/Stack";
import { EditTask,ToggleEdit,ToggleCompletion,ShowCompletedTasks } from "../redux/listTask";

export default function BasicCard({cardData,completed}) {

  const dispatch = useDispatch();
  // adding the functionality that edits the card description
  const handleEditClick=(taskId)=>{
    dispatch(ToggleEdit({taskId,isEditing:true}))
  }
  const handleEditDescription=(taskId,newDescription)=>{
        dispatch(EditTask({ taskId, newDescription }));
        //the immediate closing of the input field was because of this line : dispatch(ToggleEdit({ taskId, isEditing: false }));
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
// prevents the input field from closing right away
  const handleFocus = () => {
    clearTimeout(blurTimeout);
  };
  //***************************** */
const handleCompleteButton = (taskId) => {
  dispatch(ToggleCompletion({ taskId }));
};
const Tasks = useSelector((state) => {
  if (state.ListTasks.showCompleted) {
    return state.ListTasks.tasks.filter((task) => task.completed);
  } else {
    return state.ListTasks.tasks;
  }
});
  return Tasks.map((task) => (
    <Card sx={{ width: 320 }} key={task.id}>
      <div>
        {/*....................................*/}
        {task.isEditing ? (
          <Box
            sx={{
              py: 1,
              display: "grid",
              gap: 1,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Input
              type="text"
              value={task.description}
              onChange={(e) => handleEditDescription(task.id, e.target.value)}
              onBlur={(e) => handleBlur(task.id, e)}
              onFocus={handleFocus}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleEditDescription(task.id, e.target.value);
                  clearTimeout(blurTimeout); // Clear the timeout
                }
              }}
            />
          </Box>
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
          sx={{ position: "absolute", top: "0.005rem", right: "0.5rem" }}
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
              <Stack spacing={1} alignItems="center">
                <ButtonGroup
                  variant={task.completed ? "solid" : "outlined"}
                  size="sm"
                  color={task.completed ? "success" : "danger"}
                  aria-label="success button group"
                >
                  <Button
                    checked={task.completed}
                    onClick={() => handleCompleteButton(task.id)}
                  >
                    completed
                  </Button>
                </ButtonGroup>
              </Stack>
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