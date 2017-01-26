import {GET_TABLE_MENU} from '../actions/tableMenu'


export default function(state = [], action) {
  switch (action.type) {
    case GET_TABLE_MENU:
    return action.payload.data
  }
  return state
}
