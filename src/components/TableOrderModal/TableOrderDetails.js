import axios from 'axios'
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import TableOrderItems from './TableOrderItems'
class TableOrderDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_order:null
        };
        this.getOrder = this.getOrder.bind(this)
    }

    countTotalPrice() {}

    getOrder() {
        console.log(this.props.tableId);
        axios.get(`/api/order/${this.props.tableId}`).then(response => {
            console.log(response);
            this.setState({current_order:response.data})
        })
    }

    render() {
      let orderItems;
      let total = 0;
      if(this.state.current_order){
        console.log(this.state.current_order.order_items);
      orderItems = this.state.current_order.order_items.map( (item,i) => {
          return (
            <TableOrderItems
              key = { i }
              item = { item }
               />
          )
        })

        this.state.current_order.order_items.forEach( item => {
          console.log(item.price);
        total += item.price;
        })
        console.log(total);
      }
        return (
            <div>
              <div> <u>Table</u> {this.state.current_order? <span>{this.state.current_order.order_items[0].order_id}</span> : null} </div>
                  <div> <b>Total</b>: $ {total / 100} </div>
                      <div>
                        <button onClick={()=>this.props.closeModal()}>Close</button>
                                  <button onClick={() => console.log(this.props.order)}>See Order Avail</button>
                                  <button onClick={() => this.getOrder()}>getORder</button>
                      </div>

                <div>{orderItems}</div>

              <div>
                <button>Place Order</button>
                <button onClick={()=> this.props.closeModal()}>Cancel</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {order: state.table_order, table_menu: state.table_menu}
}

export default connect(mapStateToProps)(TableOrderDetails)
