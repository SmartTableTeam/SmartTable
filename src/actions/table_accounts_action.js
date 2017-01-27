import axios from 'axios';

export const GET_TABLE_ACCOUNTS_LIST = "GET_TABLE_ACCOUNTS_LIST";
const TABLE_ACCOUNT_URL = 'http://localhost:1701/api/account/table/list'

export const LOGIN_TABLE_ACCOUNT = "LOGIN_TABLE_ACCOUNT";
const TABLE_ACCOUNT_LOGIN_URL = "http://localhost:1701/api/auth/table/login";

export function getTableAccountList() {
	const request = axios.get(`${TABLE_ACCOUNT_URL}`);
	return {
		type: GET_TABLE_ACCOUNTS_LIST,
		payload: request
	}
}

export function loginTableAccount(table_id) {
	const request = axios.post(TABLE_ACCOUNT_LOGIN_URL, {table_account_id: table_id});
	return {
		type: LOGIN_TABLE_ACCOUNT,
		payload:request
	}

}
