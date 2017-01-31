import axios from 'axios'
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import TableOrderItems from './TableOrderItems'
import {clearOrder} from '../../actions/tableOrder'

const ORDER_URL = '/api/order'
class TableOrderDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_order: null
        };
        this.reformat = this.reformat.bind(this)
        this.postOrder = this.postOrder.bind(this)
    }

    postOrder(){
      if(this.props.order.length < 1){
        alert('Current Order is Empty Please Select an Item')
      }
      else {
        console.log(this.props.order);
        axios.post(`${ORDER_URL}`,this.reformat(this.props.order)).then(response => {
          console.log(response)
          alert('Your Order Has Been Sent!')
          this.props.clear()
          this.props.closeModal()
        })

      }
    }

    reformat(arr){
      let myArr = [];
      arr.forEach( (item) => {
        myArr.push({menu_item_id:item.id,notes:item.notes})
      })
      return myArr
    }

    render() {
        let orderItems;
        let total = 0;
        if (this.props.order) {
            orderItems = this.props.order.map((item, i) => {
                return (<TableOrderItems key={i} item={item} index={i}/>)
            })

            this.props.order.forEach(item => {
                total += item.price;
            })
        }
        return (
            <div>
                <div>
                  <button onClick={()=>{
                      axios.post(`/api/auth/table/login`,{table_account_id:2}).then(response => console.log(response))
                    }}>Login Table</button>
                    <u>Table</u>
                    {this.state.current_order
                        ? <span>{this.state.current_order.order_items[0].order_id}</span>
                        : null}
                </div>
                <div>
                    <b>Total</b>: $ {total / 100}
                </div>

                <div>{orderItems}</div>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {order: state.table_order, table_menu: state.table_menu}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    clear:clearOrder
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TableOrderDetails)
