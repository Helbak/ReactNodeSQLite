import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import styles from './app.css';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import ChartPage from './pages/ChartPage';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{ users: null, id: 0 }],
      tablePage: 1,
      userId: 1
    };
  };

  setUserId(id) {
    this.setState({ userId: id });
  };

  setTablepage(page) {
    this.setState({ tablePage: page });
    const to = page * 50;
    const from = to - 49;
    this.getUsers({ "from": from, "to": to });
  };

  getUsers(between = { "from": 1, "to": 5 }) {
    axios
      .post('http://localhost:3000/users', between)
      .then(response => this.setState({ users: response.data }))
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  componentDidMount() {
    this.getUsers({ "from": 1, "to": 49 });
  };

  render() {
    return (
      <div className={styles.app}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/users" component={() =>
          <UsersPage
          users={this.state.users}
          setTablepage={this.setTablepage.bind(this)}
          setUserId={this.setUserId.bind(this)}
          />} />
          <Route path="/usercharts" component={() => <ChartPage userId={this.state.userId} />} />
          {/* <Route component={PageNotFound} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
