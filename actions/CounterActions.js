import { DB_EMP } from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import 'babel-core/polyfill'; // for Promise


export function getDB(){
  return (dispatch) => fetch('https://data.cityofboston.gov/resource/4swk-wcg8.json')
  .then(response => response.json())
  .then(response => dispatch({
    type: 'DB_EMP',
    mode: 'cors',
    data: response
  }))
}
