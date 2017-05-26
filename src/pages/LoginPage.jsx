import React, { Component } from 'react';
import InputGroup from '../components/InputGroup';

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
    console.log('submit');
  }

  render() {
    return (
      <div className="login-page">
        <header className="page-header">
          <h1 className="logo">
            Gradebook
            <span className="logo__byline">by MuchMake</span>
          </h1>
        </header>
        <main className="main-content">
          <form onSubmit={this.handlSubmit}>
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
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }
}
