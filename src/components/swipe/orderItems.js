import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './orderModal.scss'

import {removeOrder} from '../../actions/tableOrder'
import Remove from 'react-icons/lib/md/cancel'

class OrderItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div id='orderItem-wrapper'>
      <span id='dishName'>{this.props.item.name}</span>

      <div id='itemPrice'>$ {this.props.item.price / 100}</div>
      <div id='remove'><Remove onClick={()=>this.props.remove(this.props.index)} /></div>

      {this.props.item.notes ? <div id='orderNotes'> <span>Order Notes: {this.props.item.notes}</span> </div>: null}

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    remove:removeOrder
  },dispatch)
}
export default connect(null,mapDispatchToProps)(OrderItems)
