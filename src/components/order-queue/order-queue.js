import React, { Component } from "react";

import Details from "./order-queue-details";
import List from "./order-queue-list";
import './order-queue.scss';

export default class OrderQueue extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="outer-component-box">
				<div className="component-box">
					<div className="queue-box">
						<List/>
					</div>
					<div className="details-box">
						<Details order_id={this.props.params.order_id}/>
					</div>
				</div>
			</div>
		)
	}
}