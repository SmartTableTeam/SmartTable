import axios from 'axios'


export const GET_TABLE_MENU = 'GET_TABLE_MENU'
const ROOT_URL = '/api/menu'

export function getTableMenu() {
    const response = axios.get('/api/menu/list/details')
    return {
        type: GET_TABLE_MENU,
        payload: response
    }
}
