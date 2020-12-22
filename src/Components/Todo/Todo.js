import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';


const Todo = () => {
  const initialState = {
    items: [
      {
        value: 'To finish studying',
        isDone: false,
        id: 1,
      },
      {
        value: 'To decorate a Christmas tree',
        isDone: false,
        id: 2,
      },
      {
        value: 'To make "olivye" salad',
        isDone: true,
        id: 3,
      }
    ],
    count: 2,
  };

  const [items, setItems] = useState (initialState.items);
  const [count, setCount] = useState (initialState.count);
  const [visibleItems, setVisibleItems] = useState (initialState.items);

  useEffect((items) => {
        console.log('Mount')
  },[])
  useEffect(() => {
        console.log('Update')
  })
  useEffect(() => {
        console.log('Count')
  }, [count])


  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    const newCount = newItemList.filter(newItem => newItem.isDone !== true).length;
    setItems(newItemList);
    setVisibleItems(newItemList);
    setCount(newCount);
  };

  const onClickDelete = id => {
    const deleteItemList = items.filter(item => item.id !==id);
    const newCount = deleteItemList.filter(newItem => newItem.isDone !== true).length;
    setItems(deleteItemList);
    setVisibleItems(deleteItemList);
    setCount(newCount);
  };

  const onClickAdd = (value) => {
      const newItemList = [
        ...items,
        {
          value,
          isDone: false,
          id: count + 1
        }
      ];

    setItems(newItemList);
    setVisibleItems(newItemList);
    setCount(count => count + 1);
  };

  const onClickDelAll = isDone => {
    const deleteItemList = items.filter(item => item.isDone !== true);
    setItems(deleteItemList);
    setVisibleItems(deleteItemList);

  };

  const onClickFilter = e => {
    let filterItemList = items;
    switch (e) {
      case 'all':
        filterItemList = items;
        break;
      case 'active':
        filterItemList = items.filter(item => item.isDone !== true);
        break;
      case 'completed':
        filterItemList = items.filter(item => item.isDone === true);
        break;
      default:
        filterItemList = initialState.items;
      console.log(filterItemList);
    }
    setVisibleItems(filterItemList);
  }


  return (
    <div>
      <h1 className={styles.title}>&#9731; Christmas tasks:</h1>
      <InputItem
        items={items}
        onClickAdd={onClickAdd}/>
        <ButtonGroup variant="text" size="small" color="secondary" aria-label="text primary button group">
          <Button id="all" onClick={(e) => onClickFilter('all')}>All</Button>
          <Button id="active" onClick={(e) => onClickFilter('active')}>Active</Button>
          <Button id="completed" onClick={(e) => onClickFilter('completed')}>Completed</Button>
        </ButtonGroup>
      <Card className = {styles.card}>
        <ItemList
          items={items, visibleItems}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
        <Footer count={count} onClickDelAll={onClickDelAll}/>
      </Card>
    </div>
  )
}

export default Todo;
