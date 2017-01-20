import {
    combineReducers,
    createStore
} from 'redux'
// import category from './redux/categories';
import categories from './redux/categories';
import menu_items from './redux/menuItems_reducer'

const reducer = combineReducers({

    categories: categories,
    menu_items: menu_items

})

export default reducer
