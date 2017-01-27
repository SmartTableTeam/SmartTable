import axios from 'axios'
const ORDER_URL = 'api/order'
export const ADD_ORDER = 'ADD_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const CLEAR_ORDER = 'CLEAR_ORDER'
export function addOrder (newOrder) {
    return {
      type: ADD_ORDER,
      payload: newOrder
    }
}

export function removeOrder (index) {
  return {
    type: REMOVE_ORDER,
    payload: index
  }
}

export function clearOrder () {
  return {
    type: CLEAR_ORDER
  }
}
