import React, { Component } from 'react';
import InputGroup from '../components/InputGroup';
import './LoginPage.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Submitting: ${JSON.stringify(this.state, null, 2)}`);
  }

  render() {
    return (
      <div className="login-page">
        <header className="page-header">
          <div className="logo">
            <h1 className="logo__name">Gradebook</h1>
            <div className="logo__byline">by <b>MuchMake</b></div>
          </div>
        </header>
        <main className="main-content">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <InputGroup
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <InputGroup
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button type="submit">Log In</button>
          </form>

          <ul>
            <li><a href="#!">Forgot Password?</a></li>
            <li><a href="#!">Request Invite to Beta</a></li>
          </ul>
        </main>
      </div>
    );
  }
}
