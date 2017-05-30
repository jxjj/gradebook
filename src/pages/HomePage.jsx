import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AppBar from '../containers/AppBar';
import Footer from '../components/Footer';

const HomePage = ({ currentUser }) => {
  if (!currentUser) return (<Redirect to="/login" />);
  return (
    <div className="home-page">
      <AppBar />
      <main className="main-content">
        <h1>Hello {currentUser.email}</h1>
      </main>
      <Footer />
    </div>
  );
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
