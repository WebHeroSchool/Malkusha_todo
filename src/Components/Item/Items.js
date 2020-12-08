import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => console.log('interval'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { value, id, isDone, onClickDone, onClickDelete} = this.props;
    return (
      <span>
        <span className={classnames({
        [styles.item]: true,
        [styles.done]: isDone
        })
      } onClick = {() => onClickDone(id)}>
          {value}
        </span>
        <IconButton aria-label="delete">
          <DeleteIcon onClick = {() => onClickDelete(id)} />
        </IconButton>
      </span>
    )
  }
}

Item.defaultProps = {
    isDone: false
};

//Item.PropTypes = {  value: PropTypes.string.isRequired};

export default Item;
