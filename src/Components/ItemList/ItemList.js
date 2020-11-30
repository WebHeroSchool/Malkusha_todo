import React from 'react';
import Item from '../Item/Items';
import classnames from 'classnames';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (<ul className={styles.list}>
     {items.map(item => <li key={item.value} className={classnames({
       [styles.done]: item.isDone
     })
     }>
          <Item value={item.value} isDone={item.isDone}/>
     </li>)}
</ul>);

export default ItemList;
