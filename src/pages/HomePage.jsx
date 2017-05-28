import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const HomePage = ({ currentUser }) => {
  if (!currentUser) return (<Redirect to="/login" />);
  return (<h1>Hello {currentUser.email}</h1>);
};

HomePage.propTypes = {
  currentUser: PropTypes.shape({ email: PropTypes.string }).isRequired,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(HomePage);
