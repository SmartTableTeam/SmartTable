import { ADD_ORDER } from '../actions/tableOrder'
import { REMOVE_ORDER } from '../actions/tableOrder'
import { CLEAR_ORDER } from '../actions/tableOrder'

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
    return [...state].concat(action.payload)

    case REMOVE_ORDER:
    return [...state].filter( (order,i) => {
      return i !== action.payload
    })

    case CLEAR_ORDER:
    return initialState;
  }
  return state
}
