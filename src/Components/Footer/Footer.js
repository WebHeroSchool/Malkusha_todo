import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count}) => (
  <div className={styles.footer}>Tasks to complete: {count}</div>
)

export default Footer;
