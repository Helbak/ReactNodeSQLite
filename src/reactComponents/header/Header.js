import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './header.css';


 const Header = props => (
  <div className={styles.header} >
  <NavLink  to="/"  className={styles.logo} style={{ textDecoration: 'none' }} >AppCo</NavLink>
 </div>
  );
  export default Header;