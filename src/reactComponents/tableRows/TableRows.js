import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './tableRows.css';


const TableRows = ({ users }) => (
  <div className={styles.frameRows}>
       {users.map(item => (
      <NavLink to="/" className={styles.rows} style={{ textDecoration: 'none' }} >
        <div className={styles.rowId} > {item.id} </div>
        <div className={styles.rowFour} > {item.first_name} </div>
        <div className={styles.rowFour} > {item.last_name} </div>
        <div className={styles.rowEight} > <pre>  {item.email}</pre></div>
        <div className={styles.rowThree} > {item.gender} </div>
        <div className={styles.rowFour} > {item.ip_address} </div>
        <div className={styles.rowFour} > {item.totalClicks} </div>
        <div className={styles.rowSix} > {item.totalPage_views} </div>
      </NavLink>
    ))}
   </div>
);
export default TableRows;