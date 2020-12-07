import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = ({ value, id, isDone, onClickDone, onClickDelete}) => (
  <span className={classnames({
    [styles.item]: true,
    [styles.done]: isDone
    })
    }>
      {value}
      <IconButton aria-label="delete">
        <DeleteIcon onClick = {() => onClickDelete(id)} />
      </IconButton>
  </span>

)

export default Item;
