import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import dataEmp from '../reducers/dbEmp';

const logger = createLogger();
const reducer = combineReducers(
  {
    dataEmp
  }
);

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
