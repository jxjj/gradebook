import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import currentUserReducer from './reducers/currentUserReducer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import './App.css';

const store = createStore(
  combineReducers({ currentUser: currentUserReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
