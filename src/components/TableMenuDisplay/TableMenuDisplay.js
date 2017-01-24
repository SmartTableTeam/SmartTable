import React , {Component} from 'react'
import TableMenuItem from '../TableMenuItem/TableMenuItem'

export default class TableMenuDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let items;
    if( this.props.items ) {
      items = this.props.items.map( (item,i) => {
        return (
          <TableMenuItem
            key = { i }
            photo = { item.photo_url }
            notes = { item.notes }
            name = { item.name }
            description = { item.description }
            price = { item.price }
            ingredients = { item.ingredients }
            id = { item.id }
           />
        )
      } )
    }

    return(
      <div>
        <header>{this.props.header}</header>


          {items}


      </div>
    );
  }
}
