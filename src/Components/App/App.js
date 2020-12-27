import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Todo from '../Todo/Todo';
import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <p className={styles.note}>Выполнено в WebHeroSchool</p>
      <Breadcrumbs aria-label="breadcrumb" separator="|">
        <Link to="/" color="inherit" href="#">
          About
        </Link>
        <Link to="/todo" color="inherit" href="#">
          Tasks
        </Link>
      </Breadcrumbs>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
    </div>
  </Router>

);

export default App;
