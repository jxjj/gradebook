import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import './App.css';

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(applyMiddleware(thunk)),
    autoRehydrate(),
  ),
);

persistStore(store);

export default class App extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return (<div>Loading...</div>);
    }
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}
