import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './usersBody.css';
import TableRows from '../tableRows/TableRows.js';


const UsersBody = ({ users, setTablepage, setUserId }) => (

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
      <TableRows users={users} setTablepage={setTablepage} setUserId={setUserId}/>
    </div>
    <div className={styles.toggle} >
      <div className={styles.toggleArrow} style={{ backgroundImage: `url(${'images/GreyBack.png'})` }}></div>
      <div className={styles.toggleBtn} onClick={() => setTablepage(1)} > 1 </div>
      <div className={styles.toggleBtn} onClick={() => setTablepage(2)} > 2 </div>
      <div className={styles.toggleBtn} onClick={() => setTablepage(3)} > 3 </div>
      <div className={styles.toggleBtn} onClick={() => setTablepage(4)} > 4 </div>
      <div className={styles.toggleBtn} onClick={() => setTablepage(5)} > 5 </div>

      <div className={styles.toggleArrow} style={{ backgroundImage: `url(${'images/BlueAhead.png'})` }}></div>
    </div>
  </div>
);
export default UsersBody;