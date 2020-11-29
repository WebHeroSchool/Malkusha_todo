import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const items = [
    {
      value: 'To finish studying'
    },
    {
      value: 'To decorate a Christmas tree'
    },
    {
      value: 'To make "olivye" salad '
    }
  ];

  return (
    <div className='wrap'>
      <h1 className='wrap__title'>Christmas tasks:</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3}/>
    </div>);
}

export default App;
