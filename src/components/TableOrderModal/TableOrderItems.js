import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removeOrder} from '../../actions/tableOrder'
import Remove from 'react-icons/lib/md/cancel'
class TableOrderItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {noteAdded:null};
  }

  render() {


    return(
      <div>
        <span><b>Dish: {this.props.item.name}</b></span>

        <div>Price: ${this.props.item.price / 100}</div>

        <div> {this.props.item.notes ? <span>Order Notes: {this.props.item.notes}</span>: null}</div>


      <h3><Remove onClick={()=>this.props.removeOrder(this.props.index)} /></h3>

      </div>
    );
  }
}



function mapStateToProps(state) {
    return {order: state.table_order, table_menu: state.table_menu}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeOrder:removeOrder
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TableOrderItems)
// id
// menu_item_id
// name
// notes
// order_id
// price
