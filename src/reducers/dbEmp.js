'use strict';
import {DB_EMP} from '../actions/dbEmp';

export default function getData(state = [], action) {
  switch (action.type) {
  case DB_EMP:
    return action.data.data;
  default:
    return state;
  }
}
