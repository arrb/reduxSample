import { DB_EMP } from "../constants/ActionTypes";

export default function counter(state=[],action){
  switch(action.type){
  case DB_EMP:
    return action.data;
  default:
    return state;
  }
}
