import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {clearOrder} from '../../actions/tableOrder'
import OrderItems from './orderItems'
import Printer from 'react-icons/lib/ti/printer'

import './orderModal.scss'

import axios from 'axios'

import Modal from 'react-modal'

import Restaraunt from 'react-icons/lib/fa/cutlery'

const ORDER_URL = '/api/order'

class OrderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current_order: null,table:null};
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.reformat = this.reformat.bind(this)
    this.postOrder = this.postOrder.bind(this)
  }
  // =  =  =  =  =  =  =  =  Modal Controllers  =  =  =  =  =  =  =  =

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

// =  =  =  =  =  =  =  =  =  Send Order Controls  =  =  =  =  =  =  =  =  =

postOrder(){
  axios.post(`${ORDER_URL}`,this.reformat(this.props.order)).then(response => {
  alert('Your Order Has Been Sent!')
  this.props.clear()
  this.closeModal()
  })
}

reformat(arr){
  let myArr = [];
  arr.forEach( (item) => {
    myArr.push({menu_item_id:item.id,notes:item.notes})
  })
  return myArr
}

  render() {
    const customStyles = {
      content : {
        height                : '100vh',
        width                 : '90%',
        background            : 'lightgray',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        paddingTop            : '0',
        padding               : '0',
        boxShadow             : "10px 10px 5px #888888"

      }
    }
    let orderItems;
    let total = 0;
    if (this.props.order) {
        orderItems = this.props.order.map((item, i) => {
            return (
              <OrderItems
                 key={i}
                 item={item}
                 index={i}
                 />
               )
        })
        this.props.order.forEach(item => {
            total += item.price;
        })
    }

    return(
      <div id="orderModalContainer">
        <div id='orderModalButton'>
          <h1 id='modalBtn'> <Restaraunt onClick={this.openModal} /> </h1>
          <span>View Order</span>
        </div>
         {this.state.table ?<h1>Table Number: this.state.table </h1>: null}

          <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal.bind(this)}
           onRequestClose={this.closeModal.bind(this)}
           style={customStyles}
           contentLabel="EditMenuItem Modal"
           >
           <div className="">
             <div id='header'>
               <button disabled={this.props.order.length < 1} onClick={()=> this.props.clear()}>Clear</button>
               <span ref='subtitle'>Your Order</span>
               <span id='printer'><Printer /></span>
             </div>

             <div className="container">
                  <div id='total-wrapper'>
                    <span>New Table</span>  <div id='total'><b>Total</b> <span id='total-price'>$ {total / 100}</span></div>
                  </div>

                  <div id='orderItems-container'>
                    {orderItems}
                  </div>

             </div>
           </div>

             <div id='footer-button'>

               <div id='button-center'>
                 <button className='btn btn-primary btn-md'disabled={this.props.order.length < 1} onClick={()=> this.postOrder()}>Send</button>
                 <button className='btn btn-danger btn-md'onClick={() => this.closeModal()}>Close</button>
               </div>

             </div>
          </Modal>
      </div>
    );
  }
}
// <button onClick={()=>{
//   axios.post(`/api/auth/table/login`,{table_account_id:2}).then(response => {
//     this.setState({table:response.data.id})
//   })
//   }}>Login Table</button>

function mapStateToProps(state){
  return {
    order:state.table_order
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    clear:clearOrder
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderModal)
