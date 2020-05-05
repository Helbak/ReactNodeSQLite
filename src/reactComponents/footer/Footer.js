import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.css';


const Footer = props => (
    <div className={styles.footer} >
        <div className={styles.frame} >
        <div className={styles.left} >
        <NavLink to="/" className={styles.logo} style={{ textDecoration: 'none' }} >AppCo</NavLink>
        </div>
        <div className={styles.center} >
            <div className={styles.rights} >All rights reserved by ThemeTags</div>
        </div>
        <div className={styles.right} >
        <div className={styles.copy} >Copyrights © 2019.</div>
        </div>
        </div>

    </div>
);
export default Footer;