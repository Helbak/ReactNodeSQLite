import React from 'react';
import styles from './mainFooter.css';


const MainFooter = props => (
    <div className={styles.mainFooter} style={{ backgroundImage: `url(${'images/MainFooter.png'})` }}>
        <div className={styles.subscribe}>
            <div className={styles.subscribeNotice}>Enter your email</div>
            <btn className={styles.subscribeBtn}>Subscribe</btn>
        </div>
        <div className={styles.wrapBottom}>
            <div className={styles.logo}>AppCo</div>
            <div className={styles.rights}>All rights reserved by ThemeTags</div>
            <div className={styles.copy}>Copyrights © 2019.</div>
        </div>
    </div>
);
export default MainFooter;