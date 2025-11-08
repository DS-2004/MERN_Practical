import React, { useState } from "react";
import { List, ListItem, ListItemText, TextField, Button, Stack } from "@mui/material";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      <TextField
        label="New Todo"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && addTodo()}
      />
      <Button variant="contained" onClick={addTodo}>
        Add
      </Button>
      <List>
        {todos.map((todo, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export default TodoList;