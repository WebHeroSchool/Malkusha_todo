import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = ({ value, id, isDone, onClickDone, onClickDelete}) => (
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

export default Item;
