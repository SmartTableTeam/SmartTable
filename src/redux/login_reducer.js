import { GET_USER } from '../actions/login.js'


export default function(state = [], action) {

  switch(action.type){
    case GET_USER:
    console.log(action.payload, "LOGIN REDUCER");
    console.log(state);
    return action.payload.data
  }

  return state;

}
