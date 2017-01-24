import axios from 'axios'

export const ADD_ORDER = 'ADD_ORDER'

export function addOrder (newOrder) {
    return {
      type: ADD_ORDER,
      payload: newOrder
    }

}
