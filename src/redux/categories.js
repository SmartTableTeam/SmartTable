import {
    GET_MENU
} from '../actions/index'
import {
    POST_MENU
} from '../actions/index'
import {
    DELETE_MENU
} from '../actions/index'
import {
    MENU_SELECTED
} from '../actions/index'
export default function(state = [], action) {
    switch (action.type) {
        case GET_MENU:
            return action.payload.data;

        case POST_MENU:
            return [...state, action.payload.data]


        case DELETE_MENU:
            // return [...state].filter(state => state.id !== action.payload.id)
            return ['....loading']

        case MENU_SELECTED:
            return [...state].filter(obj => obj.id === action.payload)
    }
    return state;
}
