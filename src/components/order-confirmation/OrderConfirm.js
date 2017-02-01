import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getOrderById } from '../../actions/index'
import { bindActionCreators } from 'redux'
import '../main.scss';
import './orderconfirm.scss';

class OrderConfirm extends Component {

    componentWillMount(){
        console.log("HELLO");
        this.props.getOrderById(this.props.params.order_id);

    }


  render() {

    var orderTotalPrice = 0;
    console.log("ORDER STATUS");
    console.log(this.props.order_status);
    var orderItems = this.props.order_status.order_items.map(function(item,index){

        orderTotalPrice += item.price

        return (
            <li key={index}>
                {item.name} <span className="floatRight">{item.price / 100}</span>
                { item.notes ? <ul><li>{item.notes}</li></ul> : <ul><li>No Notes</li></ul>}
            </li>
        )
    })


    return(
        <div className="confirmPage">
            <div className="confirmBox">
                <h2>Thank you!</h2>
                <p>Your order has been submitted and is being prepped now</p>

                <hr />
                    <h4>Order Details</h4>

                <ul>
                    {orderItems}
                </ul>
                <hr />
                <h4>Total:</h4> <h4 className="floatRight">{orderTotalPrice / 100}</h4>
                <button className="main-button btn">Back to Menu</button>
            </div>
        </div>
    )
  }
}


function mapStateToProps(state){
    return {order_status: state.order_status}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getOrderById: getOrderById
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm)



//<span className="floatRight">{orderTotalPrice / 100}</span>
// <ul>
//   <li>Coke</li>
//   <ul>
//     <li>No Ice</li>
//   </ul>
//   <li>Bacon Cheeseburger</li>
//     <ul>
//       <li>Only Ketchup</li>
//       {orderItems}
//     </ul>
// </ul>
