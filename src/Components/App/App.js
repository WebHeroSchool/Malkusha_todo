import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
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
    count: 3,
  };

  const [items, setItems] = useState (initialState.items);
  const [count, setCount] = useState (initialState.count);

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
      if (item.id == id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = id => {
    const deleteItemList = items.filter(item => item.id !==id);
    setItems(deleteItemList);
    setCount(count => count - 1);
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
    setCount(count => count + 1);
  };

    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>&#9731; Christmas tasks:</h1>
        <InputItem onClickAdd={onClickAdd}/>
          <ButtonGroup variant="text" size="small" color="secondary" aria-label="text primary button group">
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </ButtonGroup>
        <ItemList
          items={items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
        <Footer count={count}/>
      </div>);
//  }
};

export default App;
