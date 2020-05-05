import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './usersBody.css';
import TableRows from '../tableRows/TableRows.js';


const UsersBody = ({ users, setTablepage }) => (

  <div className={styles.usersBody} >

    <div className={styles.navigation}>
      <NavLink to="/" className={styles.prevPage} style={{ textDecoration: 'none' }} > Main page </NavLink>
      <div className={styles.arrow} > > </div>
      <div className={styles.actualPage} > User satistics </div>
    </div>
    <div className={styles.title} > Users statistics </div>
    <div className={styles.table} >
      <div className={styles.tableHeader} >
        <div className={styles.headerId} > Id </div>
        <div className={styles.headerFour} > First name </div>
        <div className={styles.headerFour} > Last name </div>
        <div className={styles.headerEight} > <pre>   Email</pre></div>
        <div className={styles.headerThree} > Gender </div>
        <div className={styles.headerFour} > IP address </div>
        <div className={styles.headerFour} > Total clicks </div>
        <div className={styles.headerSix} > Total page views </div>
      </div>
      <TableRows users={users} setTablepage={setTablepage} />
    </div>
    <div className={styles.toggle} >
      <button className={styles.toggleArrow} style={{ backgroundImage: `url(${'images/GreyBack.png'})` }}></button>
      <button className={styles.toggleBtn} onClick={() => setTablepage(1)} > 1 </button>
      <button className={styles.toggleBtn} onClick={() => setTablepage(2)} > 2 </button>
      <button className={styles.toggleBtn} onClick={() => setTablepage(3)} > 3 </button>
      <button className={styles.toggleBtn} onClick={() => setTablepage(4)} > 4 </button>
      <button className={styles.toggleBtn} onClick={() => setTablepage(5)} > 5 </button>

      <button className={styles.toggleArrow} style={{ backgroundImage: `url(${'images/BlueAhead.png'})` }}></button>
    </div>
  </div>
);
export default UsersBody;