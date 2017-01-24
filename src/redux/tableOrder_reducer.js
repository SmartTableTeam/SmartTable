import { ADD_ORDER } from '../actions/tableOrder'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_ORDER:
    return [...state, action.payload]
  }
  return state
}
