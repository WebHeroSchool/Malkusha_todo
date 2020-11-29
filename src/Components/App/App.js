import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'To finish studying',
      isDone: false,
    },
    {
      value: 'To decorate a Christmas tree',
      isDone: false,
    },
    {
      value: 'To make "olivye" salad',
      isDone: true,
    }
  ];

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Christmas tasks:</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3}/>
    </div>);
}

export default App;
