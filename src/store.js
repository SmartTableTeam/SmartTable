import {
    combineReducers,
    createStore
} from 'redux'
import categories from './redux/categories';
import menu_items from './redux/menuItems_reducer'
import table_menu from './redux/tableMenu_reducer'
import table_order from './redux/tableOrder_reducer'
const reducer = combineReducers({

    categories: categories,
    menu_items: menu_items,
    table_menu: table_menu,
    table_order: table_order
    
})

export default reducer
