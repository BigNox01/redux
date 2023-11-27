import * as React from "react";

import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Stack from "@mui/joy/Stack";

export default function ButtonGroupColors() {
  const [variant, setVariant] = React.useState("outlined");
  const createOnClick = (value) => () => {
    setVariant(value);
  };
  return (
    <Stack spacing={1} alignItems="center">
      <ButtonGroup
        variant={variant}
        size="sm"
        color="success"
        aria-label="success button group"
      >
        <Button onClick={createOnClick("outlined")}>Outlined</Button>
      </ButtonGroup>
    </Stack>
  );
}
