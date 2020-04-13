import React, { Component } from 'react';
import styles from './app.module.less';
import Header from '../header/Header.jsx';
import MainHeader from '../mainHeader/MainHeader';


export default class MainContainer extends Component {

    render() {
        return (
            <MainHeader />
            // <Header/>
        );
    }
}