import React from 'react';
import { Fragment } from 'react';
import MainHeader from '../reactComponents/mainHeader/MainHeader.js';
import MainBody from '../reactComponents/mainBody/MainBody.js';
import MainFooter from '../reactComponents/mainFooter/MainFooter.js';



const Main = () => (
    <Fragment>
        <MainHeader />
        <MainBody />
        <MainFooter />
     </Fragment>
);
export default Main;