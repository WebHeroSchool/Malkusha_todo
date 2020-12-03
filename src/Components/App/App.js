import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  render () {
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
        <h1 className={styles.title}>&#9731; Christmas tasks:</h1>
        <InputItem />
        <ButtonGroup variant="text" size="small" color="secondary" aria-label="text primary button group">
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Completed</Button>
        </ButtonGroup>
        <ItemList items={items} />
        <Footer count={3}/>
      </div>);
  }
};

export default App;
