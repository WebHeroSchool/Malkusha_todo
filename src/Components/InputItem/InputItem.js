import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
  <div>
    <TextField
      id="standard-full-width"
      label="Add a task"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      color="secondary"
    />
  </div>);

export default InputItem;
