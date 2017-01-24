import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getOrderById } from '../../actions/index'
import { bindActionCreators } from 'redux'
import '../main.scss';
import './orderconfirm.scss';

class OrderConfirm extends Component {

// displayDetails(){
//     // this.props.getOrderById(2).then(function(res){
//     //   console.log(res.payload.data);
//     // })
//     this.props.getOrderById(2)
//     // console.log(this.props.order_status);
//
//     // console.log(this.props);
//     // const detail = data.order_status.order_items;
//     // console.log(detail, "DHELJLA");
// }

componentWillMount(){
  console.log("HELLO");
  this.props.getOrderById(2)

}


  render() {
    console.log(this.props.order_status);
    if(!!this.props.order_status[0]){
      console.log(this.props.order_status[0].order_items.map( (item,index)=> {
        return (
          <li key={index}>
            {item.notes}
          </li>
        )
      }));
    var orderItems =  this.props.order_status[0].order_items.map( (item,index)=> {
        return (
          <li key={index}>
            {item.notes}
          </li>
        )
      })
    }

    return(
      <div className="confirmPage">
      <div className="confirmBox">
        <h2>Thank you!</h2>
        <p>Your order has been submitted and is being cooked now</p>

        <hr />
        <h4>Order Details</h4>
        <ul>
          <li>Coke</li>
          <ul>
            <li>No Ice</li>
          </ul>
          <li>Bacon Cheeseburger</li>
            <ul>
              <li>Only Ketchup</li>
              {orderItems}
            </ul>
        </ul>
      <hr />
        <button className="main-button btn">Back to Menu</button>
      </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  console.log(state);

  return {
    order_status: state.order_status
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOrderById: getOrderById
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm)
