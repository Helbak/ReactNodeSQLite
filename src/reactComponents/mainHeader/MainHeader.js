import React from 'react';
import styles from './mainHeader.module.css';
import { urlencoded } from 'body-parser';
// import rectangle from ('images/Rectangle8.png');

 const MainHeader = props => (

    <div className={styles.mainHeader} style={{ backgroundImage: `url(${'images/Rectangle8.png'})`}}>
               <div className={styles.wrapLogo}>
               <div className={styles.logo}>AppCo</div>
               </div>

        <div className="mainHeader_left">

        </div>

    </div>
  );
  export default MainHeader;