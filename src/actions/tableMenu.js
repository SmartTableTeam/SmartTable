import axios from 'axios'


export const GET_TABLE_MENU = 'GET_TABLE_MENU'
const ROOT_URL = 'http://localhost:1701/api/menu'

export function getTableMenu() {
    const response = axios.get('http://localhost:1701/api/menu/list/details')
    return {
        type: GET_TABLE_MENU,
        payload: response
    }
}
