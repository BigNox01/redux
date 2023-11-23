import * as React from "react";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";

export default function InputField() {
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
      <Input placeholder="Type you Task here" variant="outlined" color="neutral" />
    </Box>
  );
}
