import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const HomePage = ({ user }) => {
  if (!user) return (<Redirect to="/login" />);
  return (<h1>Hello {user.name}</h1>);
};

HomePage.defaultProps = {
  user: null,
};

HomePage.propTypes = {
  user: PropTypes.shape({ email: PropTypes.string }),
};

export default HomePage;
