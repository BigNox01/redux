import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Box from "@mui/joy/Box";
export default function SelectOption() {
  const handleChange = (event, newValue) => {
    alert(`You chose "${newValue}"`);
  };
  return (
    /*
    key1: no deadline
    key2: work tasks
    key3:urgent tasks
    key4:personal tasks
     */
    <Select defaultValue="dog" onChange={handleChange}>
      <Option value="dog">
        <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "99px",
            bgcolor: "primary.300",
          }}
        />
      </Option>
      <Option value="cat">Work tasks</Option>
      <Option value="fish">Urgent tasks</Option>
      <Option value="bird">Personal tasks</Option>
    </Select>
  );
}
