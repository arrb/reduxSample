import fetch from 'isomorphic-fetch';

export const DB_EMP = 'DB_EMP';

export function getDB(){
  console.log("actions");
  return (dispatch) => fetch('/api/employeesData')
  .then(response => response.json())
  .catch(err => console.log("error actionee",err))
  .then(response => dispatch({
    type: DB_EMP,
    data: response
  }))
}
