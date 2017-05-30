import React from 'react';
import PropTypes from 'prop-types';
import './LoginErrors.css';

const LoginError = ({ message }) => (
  <li>
    {message}
  </li>
);

LoginError.propTypes = {
  message: PropTypes.string.isRequired,
};

let id = 0;
const LoginErrors = ({ errors }) => {
  const errorsList = errors.map(err => (
    <LoginError
      key={id++}
      message={err}
    />
  ));
  return (
    <ul className="login-errors">
      { errorsList }
    </ul>
  );
};

LoginErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LoginErrors;
