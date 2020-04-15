import React from 'react';
import styles from './mainHeader.css';


const MainHeader = props => (

  <div className={styles.mainHeader} style={{ backgroundImage: `url(${'images/Rectangle8.png'})` }}>
    <div className={styles.wrapLogo}>
      <div className={styles.logo}>AppCo</div>
    </div>

    <div className={styles.wrapBody}>
      <div className={styles.mainHeaderLeft}>
        <div className={styles.title}>
        Brainstorming for desired perfect Usability
        </div>
        <span className={styles.text}>
        Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
        </span>
        <button className={styles.viewStats}>
        View Stats
        </button>
      </div>
      <div className={styles.mainHeaderRight}>
      <div className={styles.wrapPhone}>
        <div className={styles.phone} style={{ backgroundImage: `url(${'images/320px.png'})`}}></div>
      </div>
      </div>
    </div>


  </div>
);
export default MainHeader;