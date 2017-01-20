import axios from 'axios'
export const GET_MENU = 'GET_MENU'
export const POST_MENU = 'POST_MENU'
export const DELETE_MENU = 'DELETE_MENU'
export const MENU_SELECTED = 'MENU_SELECTED'
export const GET_MENU_ITEMS = 'GET_MENU_ITEMS'
export const POST_MENU_ITEM = "POST_MENU_ITEM"
const ROOT_URL = 'http://localhost:1701/api/menu'
const MENU_ITEM_URL = `http://localhost:1701/api/menuitem`
export function getMenu() {
    const response = axios.get('http://localhost:1701/api/menu/list/details')
    return {
        type: GET_MENU,
        payload: response
    }
}

export function postMenu(desc) {
    const response = axios.post(`${ROOT_URL}`, {
        category: desc
    })
    return {
        type: POST_MENU,
        payload: response
    }
}

export function deleteMenu(id) {
    console.log(id);
    console.log(`${ROOT_URL}/${id}`);
    const response = axios.delete(`${ROOT_URL}/${id}`)
    console.log(response);
    return {
        type: DELETE_MENU,
        payload: response
    }
}

export function menuSelected(id) {
    console.log(id);
    return {
        type: MENU_SELECTED,
        payload: id
    }
}

export function getMenuItems(id) {
    console.log(id);
    const response = axios.get(`http://localhost:1701/api/menuitem/list/${id}`)
    return {
        type: GET_MENU_ITEMS,
        payload: response
    }
}

export function postMenuItem(obj) {
    console.log(obj);
    const request = axios.post(`${MENU_ITEM_URL}`, {
        menu_id: obj.menu_id,
        price: obj.price,
        name: obj.name,
        desc: obj.desc,
        ingredients: obj.ingredients
    })
    return {
        type: POST_MENU_ITEM,
        payload: request
    }
}
