import {
    GET_MENU_ITEMS
} from '../actions/index'
import {
    POST_MENU_ITEM
} from '../actions/index'
export default function(state = [], action) {

    switch (action.type) {
        case GET_MENU_ITEMS:
            console.log(action.payload);
            console.log(state);
            if (!action.payload.data) {
                return state
            }
            return action.payload.data

        case POST_MENU_ITEM:
            console.log(action.payload);
            console.log(state);
            return [...state, action.payload.data]
    }
    return state;
}
