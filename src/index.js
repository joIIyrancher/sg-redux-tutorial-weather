import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';


// Middlewares are functions that take in an action and depending on the
// action type or payload (and other factors), the middleware may let the
// action pass through, manipulate it, console log or stop it

// Middlewares are like gate keeper for actions to reducers



// ReduxPromise middleware stops actions that have a promise and wait until 
// the action has been resolved and then makes a new action with the 
// payload with the returned data and send it to reducers

// if the action does not have a promise then it lets the action through to
// the reducers

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
