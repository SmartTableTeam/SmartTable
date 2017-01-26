import React, { Component } from "react";

import Details from "./order-queue-details";
import List from "./order-queue-list";

export default class OrderQueue extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="OrderQueue component-box">
				<div className="queue-box">
					<List/>
				</div>
				<div className="details-box">
					<Details order_id={this.props.params.order_id}/>
				</div>
			</div>
		)
	}
}