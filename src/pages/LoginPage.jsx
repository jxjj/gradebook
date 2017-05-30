import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions/userActions';
import InputGroup from '../components/InputGroup';
import Footer from '../components/Footer';
import LoginErrors from '../components/LoginErrors';
import './LoginPage.css';

class LoginPage extends Component {
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
    this.props.dispatch(loginUser(this.state));
  }

  render() {
    // if authenticated, send to home
    if (this.props.currentUser) {
      return (<Redirect to="/" />);
    }
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
          <LoginErrors errors={this.props.loginErrors} />
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
        <Footer />
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({ email: PropTypes.string }),
  loginErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

LoginPage.defaultProps = {
  currentUser: null,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    loginErrors: state.loginErrors,
  };
}

export default connect(mapStateToProps)(LoginPage);
