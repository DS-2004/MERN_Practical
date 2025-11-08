import React, { useState } from "react";
import { Button, Typography, Stack } from "@mui/material";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h5">Count: {count}</Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      <Button variant="outlined" onClick={() => setCount(count - 1)}>
        Decrement
      </Button>
    </Stack>
  );
}

export default Counter;