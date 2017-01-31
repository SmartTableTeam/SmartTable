import React, { Component } from "react";
import {Link, hashHistory} from "react-router";
import { connect } from 'react-redux'
import store from "../../store"
import { bindActionCreators } from 'redux'

import './table-accounts.scss';

import { getTableAccountList , loginTableAccount } from "../../actions/table_accounts_action.js";


class TableAccountsList extends Component {

	constructor(props) {
		super(props);

	}

	componentWillMount() {
		this.props.getTableAccountList();
	}

	loginButtonFunction(table_id) {
		console.log(`Table Account ID: ${table_id}`);
		this.props.loginTableAccount(table_id);
		hashHistory.push('/TableMenu');
	}

	render() {
		const tables = this.props.table_accounts.map(account => {
			return (
				<div key={account.id} className="table-account-item">
					Table {account.table_number}
					<button onClick={() => this.loginButtonFunction(account.id)}>Login</button>
				</div>
			)
		});


		return (
			<div>
				<h2>Table Account List</h2>
				{ tables }
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {table_accounts: state.table_accounts}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getTableAccountList:getTableAccountList,
		loginTableAccount:loginTableAccount
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableAccountsList)