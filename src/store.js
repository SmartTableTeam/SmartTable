import {
    combineReducers,
    createStore
} from 'redux'
import categories from './redux/categories';
import menu_items from './redux/menuItems_reducer'

import table_menu from './redux/tableMenu_reducer'
import table_order from './redux/tableOrder_reducer'

import order_status  from './redux/order_status_reducer'
import current_user from './redux/login_reducer'


const reducer = combineReducers({

    categories: categories,
    menu_items: menu_items,
    table_menu: table_menu,
    table_order: table_order,
    order_status: order_status,
    current_user: current_user


})

export default reducer
