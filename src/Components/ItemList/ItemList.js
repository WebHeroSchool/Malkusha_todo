import React from 'react';
import Item from '../Item/Items';

const ItemList = () => (<ul>
  <li><Item todo = {'Завершить обучение'} /></li>
  <li><Item todo = {'Нарядить елку'} /></li>
  <li><Item todo = {'Приготовить оливье'} /></li>
</ul>);

export default ItemList;
