import React from 'react';
import { Fragment } from 'react';
import Header from '../reactComponents/header/Header.js';
// import UsersBody from '../reactComponents/usersBody/UsersBody.js';
import Footer from '../reactComponents/footer/Footer.js';


const ChartPage = ({userId}) => (
    <Fragment>
        <Header />
        <div>userId = {userId}</div>
        <Footer />
     </Fragment>
);
export default ChartPage;



