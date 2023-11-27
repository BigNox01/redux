import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import ListDivider from "@mui/joy/ListDivider";

export default function InputField({handleAddTask}) {
const [description, setDescription] = React.useState("");
const handleDescriptionChange=(event)=>{
  setDescription(event.target.value);
}
const handleSubmit=()=>{
  handleAddTask(description);
};

  return (
    <Box
      sx={{
        py: 2,
        display: "grid",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Input
        placeholder="Type you Task here"
        variant="outlined"
        color="neutral"
        onChange={handleDescriptionChange}
        value={description}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}
