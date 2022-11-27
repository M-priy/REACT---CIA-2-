import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [color, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
    <Box sx={{ maxWidth: 900 }}>
    <br/>
  
    <br/>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="color"
          onChange={handleChange}
        >
          <MenuItem value={"red"}>red</MenuItem>
          <MenuItem value={"green"}>green</MenuItem>
          <MenuItem value={"yellow"}>yellow</MenuItem>
          <MenuItem value={"red"}>red</MenuItem>
          <MenuItem value={"pink"}>pink</MenuItem>
          <MenuItem value={"brown"}>brown</MenuItem>
          <MenuItem value={"purple"}>`purple</MenuItem>
        </Select>
      </FormControl>
    </Box><br/>
    <br/><br/>

    <Box
      sx={{
        width: 1000,
        height: 1000,
        backgroundColor: color,
      }}
    />
    </div>
  );
}