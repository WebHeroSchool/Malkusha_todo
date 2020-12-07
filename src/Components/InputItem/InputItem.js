import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InputItem = ({onClickAdd}) => (
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
    <Button onClick = { onClickAdd }>Add</Button>
  </div>);

export default InputItem;
