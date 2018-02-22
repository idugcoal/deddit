import React, { Component } from 'react';
import Login from '../Login/Login';
import styles from './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.test}>deddit</div>
        <Login />
      </div>
    );
  }
}

export default App;
