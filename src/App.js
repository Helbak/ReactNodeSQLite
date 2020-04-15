import React from 'react';
import styles from './app.css';
import Header from './reactComponents/header/Header.js';
import MainHeader from './reactComponents/mainHeader/MainHeader.js';
import MainBody from './reactComponents/mainBody/MainBody.js';
import MainFooter from './reactComponents/mainFooter/MainFooter.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className={styles.app}>
       <MainHeader/>
       <MainBody/>
       <MainFooter/>
      </div>
    )
  }
}
