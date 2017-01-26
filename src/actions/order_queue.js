import axios from 'axios';

export const GET_OPEN_ORDERS 	= 'GET_OPEN_ORDERS';
const ORDER_LIST_URL = 'http://localhost:1701/api/order/list/open'

export function getOpenOrders() {
	console.log("GET OPEN ORDERS ACTION");
	const request = axios.get(`${ORDER_LIST_URL}`);
	return {
		type: GET_OPEN_ORDERS,
		payload: request
	}
}
