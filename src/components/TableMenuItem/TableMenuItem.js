import React , { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import TableMenuItemModal from '../TableMenuItemModal/TableMenuItemModal'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import {addOrder} from '../../actions/tableOrder'
import AlertContainer from 'react-alert'
import LocalRestaurant from 'react-icons/lib/fa/cutlery'
import ReactAlert from '../react-alert/react-alert'

class TableMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {orderNotes:""};
    this.addOrderNotes = this.addOrderNotes.bind(this)
    this.handleOrderItem = this.handleOrderItem.bind(this)
    this.alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  };
  }

  addOrderNotes(e){
    this.setState({orderNotes:e.target.value})
  }

  handleOrderItem(){
    let orderItem = {
      menu_item: this.props.id,
      notes: this.state.orderNotes
    };
    this.props.addOrder(orderItem)
  }

  render() {

    var sectionStyle = {
        width: "200px",
        height: "200px",
        border: "1px solid black",
        clear: "both",
        backgroundImage: `url( ${ this.props.photo }  )`,
        backgroundSize:"cover",
        backgroundPosition: "center",
        cursor:"pointer"
    };
    return(
      <div className='TableMenuItem_wrapper'>
        <div style={sectionStyle}></div>

        <div className='Item_description_container'>
        <h4><b>{this.props.name}</b></h4>
        <p>{this.props.ingredients}</p>
        </div>

        <TableMenuItemModal
          photo = { this.props.photo }
          notes = { this.props.notes }
          ingredients = { this.props.ingredients }
        />

      <MdThumbUp onClick={this.handleOrderItem}  />
        <input onChange={this.addOrderNotes}/>
jk      </div>
    );
  }
}

function mapStateToProps(state) {
    return {table_menu: state.table_menu,table_order: state.table_order}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      addOrder:addOrder
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TableMenuItem)
