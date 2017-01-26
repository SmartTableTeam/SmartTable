import axios from 'axios'
export const GET_MENU = 'GET_MENU'
export const POST_MENU = 'POST_MENU'
export const DELETE_MENU = 'DELETE_MENU'
export const MENU_SELECTED = 'MENU_SELECTED'
export const GET_MENU_ITEMS = 'GET_MENU_ITEMS'
export const POST_MENU_ITEM = "POST_MENU_ITEM"
export const RESET_MENU_ITEMS = 'RESET_MENU_ITEMS'
export const GET_THIS_MENU_ITEM = 'GET_THIS_MENU_ITEM'
export const UPDATE_MENU_ITEM = "UPDATE_MENU_ITEM"

export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID"
const ROOT_URL = 'http://localhost:1701/api/menu'
const MENU_ITEM_URL = 'http://localhost:1701/api/menuitem'
const ORDER_ID_URL = 'http://localhost:1701/api/order'
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
    const response = axios.delete(`${ROOT_URL}/${id}`)
    return {
        type: DELETE_MENU,
        payload: response
    }
}

export function menuSelected(id) {
    return {
        type: MENU_SELECTED,
        payload: id
    }
}

export function getMenuItems(id) {
    const response = axios.get(`http://localhost:1701/api/menuitem/list/${id}`)
    return {
        type: GET_MENU_ITEMS,
        payload: response
    }
}

export function postMenuItem(obj) {
    const request = axios.post(`${MENU_ITEM_URL}`, {
        menu_id: obj.menu_id,
        price: obj.price,
        name: obj.name,
        description: obj.description,
        ingredients: obj.ingredients
    })
    return {
        type: POST_MENU_ITEM,
        payload: request
    }
}

export function resetMenuItems(){
  return {
    type: RESET_MENU_ITEMS
  }
}

export function getThisMenuItem(id){
  const response = axios.get(`${MENU_ITEM_URL}/${id}`)
  return {
    type: GET_THIS_MENU_ITEM,
    payload:response
  }
}

export function updateMenuItem(obj){
  const request = axios.put(`${MENU_ITEM_URL}`,obj)

  return {
    type: UPDATE_MENU_ITEM,
  }
  
}

export function getOrderById(id){
  const request = axios.get(`${ORDER_ID_URL}/${id}`);

  return {
    type: GET_ORDER_BY_ID,
    payload: request
  }
}
