import { GET_ORDER_BY_ID } from '../actions/index'

export default function(state = [], action){

  switch (action.type) {
    case GET_ORDER_BY_ID:
      console.log(action.payload);
      console.log(state);
      return [action.payload.data]
  }
  return state;
}
