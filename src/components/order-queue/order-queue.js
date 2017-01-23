import React, { Component } from "react";

import Details from "./order-queue-details";
import List from "./order-queue-list";

export default class OrderQueue extends Component {


	render() {
		return (
			<div className="OrderQueue">
				<div>
					<List></List>
				</div>
				<div>
					<Details/>
				</div>
			</div>
		)
	}
}