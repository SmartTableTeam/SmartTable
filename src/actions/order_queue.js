import axios from 'axios';

export const GET_OPEN_ORDERS = 'GET_OPEN_ORDERS';
const ORDER_LIST_URL = '/api/order/list/open'

export function getOpenOrders() {
	console.log("GET OPEN ORDERS ACTION");
	const request = axios.get(`${ORDER_LIST_URL}`);
	console.log(request);
	return {
		type: GET_OPEN_ORDERS,
		payload: request
	}
}
