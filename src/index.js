import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware,} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import styles from './index.scss';

import Container from './Container/container';
import reducers from './reducers/reducer';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return(
      <Container />
    )
  }
}

ReactDOM.render(
  <Provider store = {store}>
    <App /> 
  </Provider>
  , document.getElementById('root'));