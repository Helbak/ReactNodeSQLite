import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import styles from './app.css';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{users: null}],
      test: 'test'
    };
  };

  getUsers(between) {
    axios
      .post('http://localhost:3000/users', between)
      .then(response => this.setState({ users: response.data }))
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  findInArray(array, object) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === object.id) return true;
    }
    return false;
  };

  completeUsers() {
    const crude = this.state.crudeUsers;
    const completed = [];
    for (let i = 0; i < crude.length; i++) {
      if (!this.findInArray(completed, crude[i])) {
        completed.push(crude[i]);
      }
    };
    for(let i=0; i<completed.length; i++){
      const arrayIds = crude.filter(object => object.id === completed[i].id);
      let sum = 0;
      arrayIds.forEach(object => {sum = sum + object.clicks});
      completed[i].totalClicks = sum;
    }
    this.setState({ completedUsers: completed })
  };


setUsers(between = { "from": 1, "to": 5 }) {
  this.getUsers(between);
  this.completeUsers();
};

render() {
  return (
    <div className={styles.app}>
      <p>{JSON.stringify(this.state.users)}</p>
      <button onClick={() => this.setUsers()}>setData</button>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/users" component={UsersPage} />
        {/* <Route component={PageNotFound} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  )
}
}
