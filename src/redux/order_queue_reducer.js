import {GET_OPEN_ORDERS} from '../actions/order_queue.js';

export default function(state = [], action) {

	switch(action.type) {
		case GET_OPEN_ORDERS:
			console.log("PROMISE RETURNED");
			return action.payload.data
	}
	return state;
}