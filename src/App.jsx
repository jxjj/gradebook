import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Footer />
    </div>
  </Router>
);

export default App;
