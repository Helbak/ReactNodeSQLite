import React from 'react';
import { Fragment } from 'react';
import Header from '../reactComponents/header/Header.js';
import UsersBody from '../reactComponents/usersBody/UsersBody.js';
import Footer from '../reactComponents/footer/Footer.js';


const Users = ({users, setTablepage, setUserId}) => (
    <Fragment>
        <Header />
        <UsersBody users={users} setTablepage={setTablepage} setUserId={setUserId}/>
        <Footer />
     </Fragment>
);
export default Users;