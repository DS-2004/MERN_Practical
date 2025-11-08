// import React from "react";
// import ProfileCard from "./ProfileCard";
// import Counter from "./Counter";
// import TodoList from "./Toollist";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Avatar,
//   TextField,
//   Button,
//   Paper,
//   Stack,
// } from "@mui/material";

// function App() {
//   return (
//     <div>
//       {/* AppBar (Top Navigation) */}
//       <AppBar position="static">
//         <Toolbar>
//           <Avatar alt="Diksha" src="https://via.placeholder.com/40" sx={{ mr: 2 }} />
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Diksha Sambrekar
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>

      
//       {/* Content */}
//       <Stack spacing={3} alignItems="center" sx={{ mt: 5 }}>
//         {/* Paper (Card-like container) */}
//         <Paper elevation={3} sx={{ padding: 4, width: "400px", textAlign: "center" }}>
//           <Typography variant="h5" gutterBottom>
//             Welcome Back 👋
//           </Typography>
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//           <Button variant="contained" color="primary" fullWidth>
//             Submit
//           </Button>
//         </Paper>

//         {/* Add your components below */}
//         <ProfileCard
//           name="Diksha Sambrekar"
//           email="diksha@email.com"
//           avatar="https://via.placeholder.com/56"
//         />
//         <Counter />
//         <TodoList />
//       </Stack>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Drawer,
  Button,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

export default function AllMUIComponents() {
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [switchOn, setSwitchOn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [selectValue, setSelectValue] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        All MUI Components Demo
      </Typography>

      {/* ✅ Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        label="Check me"
      />

      {/* 🔘 Radio Buttons */}
      <RadioGroup
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        row
      >
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>

      {/* 🔄 Switch */}
      <FormControlLabel
        control={
          <Switch
            checked={switchOn}
            onChange={(e) => setSwitchOn(e.target.checked)}
          />
        }
        label="Toggle me"
      />

      {/* ✏️ TextField */}
      <TextField
        label="Your Name"
        variant="outlined"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        fullWidth
        margin="normal"
      />

      {/* 📋 Select Menu */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Select Option</InputLabel>
        <Select
          value={selectValue}
          label="Select Option"
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <MenuItem value="apple">Apple</MenuItem>
          <MenuItem value="banana">Banana</MenuItem>
          <MenuItem value="cherry">Cherry</MenuItem>
        </Select>
      </FormControl>

      {/* 📂 Drawer */}
      <Button variant="contained" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </Button>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ width: 250, padding: 20 }}>
          <Typography variant="h6">Drawer Content</Typography>
          <Button onClick={() => setDrawerOpen(false)}>Close</Button>
        </div>
      </Drawer>

      {/* 🧱 Grid Layout */}
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={6}>
          <div style={{ backgroundColor: '#e0f7fa', padding: 10 }}>Left Grid</div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ backgroundColor: '#ffe0b2', padding: 10 }}>Right Grid</div>
        </Grid>
      </Grid>
    </div>
  );
}