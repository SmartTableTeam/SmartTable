import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import MdThumbUp from 'react-icons/lib/fa/thumbs-up'

import InfoModal from './infoModal'

import './Alert.scss'
import Alert from 'react-s-alert';

import {addOrder} from '../../actions/tableOrder'

import './orderModal.scss'

class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {orderNotes: "",addNote: null,modalIsOpen:null};
    this.addOrderNotes = this.addOrderNotes.bind(this)
    this.handleOrderItem = this.handleOrderItem.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  // = = = = = = = = = = Alert = = = = = = = = = =
  handleSuccess(orderItem) {
   Alert.warning(`Your Dish "${orderItem.name}" Has Been Added!`, {
       position: 'top-right'
   });
  }
  handleSuccessNotes(orderItem){
   Alert.warning(`Your Dish "${orderItem.name}" Has Been Added! With Note Of "${orderItem.notes}"`, {
       position: 'top-right'
   });
  }
  // = = = = = = = = = = = Order Handlers = = = = = = = = = = = =
  addOrderNotes(e) {
      this.setState({orderNotes: e.target.value})
  }

  handleOrderItem() {
      let orderItem = {
          menu_item_id: this.props.item.id,
          notes: this.state.orderNotes,
          price:this.props.item.price,
          ingredients:this.props.item.ingredients,
          name:this.props.item.name
      };
      this.props.addOrder(orderItem)
      if(!orderItem.notes){
        // alert(`Your Dish "${orderItem.name}" Has Been Added`)
        // this.handleSuccess(orderItem)
        this.setState({addNote:false})
        this.setState({orderNotes:''})
      }
      else {
        // alert(`Your Dish "${orderItem.name}" Has Been Added With Note Of "${orderItem.notes}"`)
        // this.handleSuccessNotes(orderItem)
        this.setState({addNote:false})
        this.setState({orderNotes:''})
      }

  }

  closeModal() {
    this.setState({modalIsOpen:null})
  }

  render() {
    var sectionStyle = {
        width: "200px",
        height: "200px",
        marginLeft:"8px",
        backgroundImage: `url( ${this.props.item.photo_url}  )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer"
    };
    return(
      <div id='menuItem-container'>

        <div id="menuItem-wrapper">
            <div onClick={()=> this.setState({modalIsOpen:true})}
            style={sectionStyle}>

            </div>

            <div id='desc-container'>
            <h2>
                <b>{this.props.item.name}</b>
            </h2>
            <h4>{this.props.item.ingredients}</h4>
            </div>

            <div id='options-container'>

              <div id='options-price'>
                <h1 id='thumbs-up'> <MdThumbUp onClick={this.handleOrderItem}/> </h1>

                <div id='info-wrapper'>
                  <span id='infoModal'>
                    <InfoModal
                    item={this.props.item}
                    modalIsOpen={this.state.modalIsOpen}
                    closeModal={this.closeModal}
                    />
                  </span>
                </div>

              </div>

              <div>
                <h3>${(this.props.item.price / 100)}</h3>
              </div>

            </div>

        </div>


        <div id='noteContainer'>
        {!this.state.addNote ? <button id='addNote' className='btn btn-danger btn-md' onClick={()=>this.setState({addNote:!this.state.addNote})}>Add Note</button> : null}
        {this.state.addNote ? <button id='closeNote' onClick={()=> this.setState({addNote:null})} className='btn btn-danger btn-md'>Close</button> : null}
        {this.state.addNote ? <button id='sendNote' className='btn btn-danger btn-md' onClick={this.handleOrderItem}>Send</button> : null}
        {this.state.addNote ?<div><textarea placeholder='notes....' rows="5" cols="50" onChange={this.addOrderNotes}></textarea></div>: null}
        </div>







        <Alert stack={true} timeout={3000} />

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    order:state.table_order
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addOrder:addOrder
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuItems)
