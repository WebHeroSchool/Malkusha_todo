import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
  <div>
  <TextField
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="Add a task"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
  </div>);

export default InputItem;
