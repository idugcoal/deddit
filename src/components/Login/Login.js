import React, { Component } from 'react';
import styles from './Login.css';

class Login extends Component {
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.loginTriangle}></div>
        <h2 className={styles.loginHeader}>Log in</h2>
        <form className={styles.loginContainer}>
          <p><input type="email" placeholder="Email" /></p>
          <p><input type="password" placeholder="Password" /></p>
          <p><input type="submit" value="Log in" /></p>
        </form>
      </div>
    );
  }
}

export default Login;
