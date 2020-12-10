import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <Breadcrumbs aria-label="breadcrumb" separator="|">
        <Link to="/" color="inherit" href="#">
          About
        </Link>
        <Link to="/todo" color="inherit" href="#">
          Tasks
        </Link>
        <Link to="/contacts" color="inherit" href="#">
          Contacts
        </Link>
      </Breadcrumbs>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
      <Route path='/contacts' component={Contacts} />
    </div>
  </Router>
);

export default App;
