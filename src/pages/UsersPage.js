import React from 'react';
import { Fragment } from 'react';
import Header from '../reactComponents/header/Header.js';
import UsersBody from '../reactComponents/usersBody/UsersBody.js';
import Footer from '../reactComponents/footer/Footer.js';


const Users = ({users, setTablepage}) => (
    <Fragment>
        <Header />
        <UsersBody users={users} setTablepage={setTablepage}/>
        <Footer />
     </Fragment>
);
export default Users;