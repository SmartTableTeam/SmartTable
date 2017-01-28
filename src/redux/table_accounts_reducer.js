import {GET_TABLE_ACCOUNTS_LIST} from '../actions/table_accounts_action.js';
import {LOGIN_TABLE_ACCOUNT} from '../actions/table_accounts_action.js';

export default function(state = [], action) {

	switch(action.type) {
		case GET_TABLE_ACCOUNTS_LIST:
			return action.payload.data;

		case LOGIN_TABLE_ACCOUNT:
			return action.payload.data;
	}
	return state;
}