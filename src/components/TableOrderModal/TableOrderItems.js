import React from 'react';
class TableOrderItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <span><b>{this.props.item.name}</b></span>
        <div>$ {this.props.item.price / 100}</div>
      </div>
    );
  }
}
export default TableOrderItems;
// id
// menu_item_id
// name
// notes
// order_id
// price
