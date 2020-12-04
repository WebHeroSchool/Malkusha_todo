import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
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
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id == id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });
    this.setState({ items: newItemList });

  };

  render () {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>&#9731; Christmas tasks:</h1>
        <InputItem />
        <ButtonGroup variant="text" size="small" color="secondary" aria-label="text primary button group">
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Completed</Button>
        </ButtonGroup>
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={3}/>
      </div>);
  }
};

export default App;
