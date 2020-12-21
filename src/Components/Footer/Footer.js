import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

const Footer = ({count, onClickDelAll}) => (
  <div className={styles.footer}>
    <div className={styles.subtitle}>Tasks to complete: {count}</div>
    <Button color="secondary" onClick={onClickDelAll}>Delete completed tasks</Button>
  </div>
)

Footer.defaultProps = {
    count: 0
};

Footer.propTypes = {
     count: PropTypes.number.isRequired
};

export default Footer;
