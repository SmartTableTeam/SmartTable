import axios from 'axios'
const ORDER_URL = 'api/order'
export const ADD_ORDER = 'ADD_ORDER'
export const GET_ORDER = 'GET_ORDER'
export function addOrder (newOrder) {
    return {
      type: ADD_ORDER,
      payload: newOrder
    }

}

export function getOrder () {
  const request = axios.get(`${ORDER_URL}`)
  return {
    type: ADD_ORDER,
    payload: request
  }
}
