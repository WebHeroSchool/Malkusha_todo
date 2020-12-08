import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

const Footer = ({count}) => (
  <div className={styles.footer}>
    <div className={styles.subtitle}>Tasks to complete: {count}</div>
    <Button color="secondary">Delete completed tasks</Button>
  </div>
)

Footer.defaultProps = {
    count: 0
};

export default Footer;
