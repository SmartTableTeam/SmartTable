import React, { Component } from "react";
import {Link} from "react-router";
import { connect } from 'react-redux'
import store from "../../store"
import { bindActionCreators } from 'redux'

import './table-accounts.scss';

import { getTableAccountList , loginTableAccount } from "../../actions/table_accounts_action.js";


class TableAccountsList extends Component {

	componentWillMount() {
		this.props.getTableAccountList();
	}

	loginButtonFunction(table_id) {
		this.props.loginTableAccount(table_id);

	}

	render() {
		const tables = this.props.table_accounts.map(account => {
			return (
				<div key={account.id} className="table-account-item">
					Table {account.table_number}
					<button>Login</button>
				</div>
			)
		});


		return (
			<div>
				<h2>Table Account List</h2>
				{tables}
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