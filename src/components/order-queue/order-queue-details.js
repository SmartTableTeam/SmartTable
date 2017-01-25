import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getOrderById } from '../../actions/index'
import './order-queue.scss';

class OrderQueueDetails extends Component {

	componentWillMount() {
		this.props.getOrderById(this.props.order_id)
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextProps.order_id !== this.props.order_id) {
			this.props.getOrderById(nextProps.order_id)
		}
	}

	render() {
		const order_items = this.props.order.order_items.map(order_item => (
			<div key={order_item.id}> {order_item.name} - {order_item.notes} - ${order_item.price/100} </div>
		));

		return (
			<div className="OrderQueueDetails">
				<h2>Ya'll want details? I got great details, right here!</h2>
				{order_items}	
			</div>

		)
	}
}

function mapStateToProps(state) {
	return {order: state.order_status}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getOrderById: getOrderById
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderQueueDetails)
