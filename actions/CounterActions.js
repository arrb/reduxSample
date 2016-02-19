import { DB_EMP } from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import 'babel-core/polyfill';

var url = '../data/employeesData.json';

export function getDB(){
  return (dispatch) => fetch( url )
  .then(response => response.json())
  .catch(err => console.log("error action",err))
  .then(response => dispatch({
    type: 'DB_EMP',
    dataType: 'json',
    data: response
  }))
}
