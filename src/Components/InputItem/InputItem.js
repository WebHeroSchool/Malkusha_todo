import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class InputItem extends React.Component {
  state = {
    inputValue: '',
  };

  onButtonClick = () => {
    let existingValue = this.props.items.findIndex(item => item.value === this.state.inputValue);

    if (this.state.inputValue === '') {
      this.setState({inputValue: 'The task must not be empty'})
    }
    else if (existingValue !== -1) {
      this.setState({inputValue: 'This task is already exisits'})
    }
    else if (this.state.inputValue !== '' && existingValue === -1)
    {
      this.setState({
        inputValue: ''})
      this.props.onClickAdd(this.state.inputValue)
      }
  }


  render () {
    const { onClickAdd, items } = this.props;

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
          onClick = {e => this.setState({inputValue: ''})}
        />
        <Button onClick = { this.onButtonClick }>Add</Button>
      </div>);
  }
}

TextField.PropTypes = {
  inputValue: PropTypes.string.isRequired
};

export default InputItem;
