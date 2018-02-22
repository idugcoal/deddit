import React, { Component } from 'react';
import styles from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    console.log('testing')
  }

  render() {
    return (
      <div className={styles.login}>
        <h2 className={styles.loginHeader}>Log in</h2>
        <form className={styles.loginContainer}>
          <p><input type="email" placeholder="Email" autoComplete="on" /></p>
          <p><input type="password" placeholder="Password" autoComplete="on" /></p>
          <p><button type="submit" onClick={this.onClick}>Log In</button></p>
        </form>
      </div>
    );
  }
}

export default Login;
