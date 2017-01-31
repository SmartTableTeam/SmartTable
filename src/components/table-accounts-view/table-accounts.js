import React, { Component } from "react";
import TableAccountsList from "./table-accounts-list";

import './table-accounts.scss';


export default class TableAccounts extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="outer-component-box">
				<div className="component-box">
					<div className="list-box">
						<TableAccountsList/>
					</div>
					<div className="add-table-box">
						lorem ipsum
					</div>
				</div>
			</div>
		)
	}
}