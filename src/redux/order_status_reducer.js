import { GET_ORDER_BY_ID } from '../actions/index'

const initialState = {
	order_items:[]
}

export default function(state = initialState, action){

  switch (action.type) {
    case GET_ORDER_BY_ID:
   		return action.payload.data
  }
  return state;
}
