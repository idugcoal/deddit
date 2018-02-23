import React, { Component } from 'react';
import styles from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.onClick = this.onClick.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onClick(e) {
    e.preventDefault();
    console.log(this.state.username, this.state.password)
  }

  render() {
    return (
      <div className={styles.login}>
        <h2 className={styles.loginHeader}>Log in</h2>
        <form className={styles.loginContainer}>
          <p>
            <input 
              type="email" 
              placeholder="Username" 
              autoComplete="on"
              onChange={this.handleUsername} 
            />
          </p>
          <p>
            <input 
            type="password" 
            placeholder="Password" 
            autoComplete="on" 
            onChange={this.handlePassword}
            />
          </p>
          <p><button type="submit" onClick={this.onClick}>Log In</button></p>
        </form>
      </div>
    );
  }
}

export default Login;
