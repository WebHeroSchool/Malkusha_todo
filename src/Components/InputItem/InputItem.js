import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: null
  };

  onButtonClick = () => {
    if (this.state.inputValue !== null) {
      this.setState({
        inputValue: ''
      })
      this.props.onClickAdd(this.state.inputValue);
    }

  }

  render () {
    const { onClickAdd } = this.props;

    return (
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
          value = {this.state.inputValue}
          onChange = {event => this.setState({inputValue: event.target.value})}
        />
        <Button onClick = { this.onButtonClick }>Add</Button>
      </div>);
  }
}

export default InputItem;
