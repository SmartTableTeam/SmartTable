import React, { Component } from "react";
import {Link} from "react-router";
import { connect } from 'react-redux'
import store from "../../store"
import { bindActionCreators } from 'redux'


import { getOpenOrders } from "../../actions/order_queue.js"


class OrderQueueList extends Component {

	componentWillMount() {
		this.props.getOpenOrders().then(() => {
			// console.log(this.props.order_queue);
		});
	}

	render() {
		console.log("ORDER QUEUE LIST PROPERTIES");
		console.log(this.props);
		const orders = this.props.order_queue.map(order => {

			return (
				<Link 
					key={order.order_id}
					to={`/profile/orders/${order.order_id}`}
				>
					<div key={order.order_id} className="order-queue-item">
						Table: {order.table_number} - {order.order_item_count} items - {new Date(order.create_time).toLocaleTimeString()}
					</div>
				</Link>
			)
		});

		return (
			<div className="OrderQueueList">
				<h2>Dis is ma Order List, ya heathens</h2>
				{orders}				
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {order_queue: state.order_queue}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getOpenOrders:getOpenOrders
		}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderQueueList)
