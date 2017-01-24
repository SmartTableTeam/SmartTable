import {
    GET_MENU_ITEMS
} from '../actions/index'
import {
    POST_MENU_ITEM
} from '../actions/index'
import {
    RESET_MENU_ITEMS
} from '../actions/index'
import {
    GET_THIS_MENU_ITEM
} from '../actions/index'
import {
    UPDATE_MENU_ITEM
} from '../actions/index'
export default function(state = [], action) {

    switch (action.type) {
        case GET_MENU_ITEMS:
            if (!action.payload.data) {
                return state
            }
            return action.payload.data

        case POST_MENU_ITEM:
            return [...state, action.payload.data]

        case RESET_MENU_ITEMS:
            return [...state].filter(items => items.id === null)

        case GET_THIS_MENU_ITEM:
            return [...state, action.payload.data].filter(obj=> obj === action.payload.data)

        case UPDATE_MENU_ITEM:
            return state;
    }
    return state;
}
