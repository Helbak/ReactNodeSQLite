import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './app.css';
import Main from './pages/Main'
import PageNotFound from './pages/Notfound'
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
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/head" component={MainBody} />
          {/* <Route component={PageNotFound} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
