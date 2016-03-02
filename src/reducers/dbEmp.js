'use strict';
import {DB_EMP} from '../actions/dbEmp';

export default function getData(state = [], action) {
  switch (action.type) {
  case DB_EMP:
  console.log("Red", action.data);
    return action.data.data;
  default:
    return state;
  }
}
