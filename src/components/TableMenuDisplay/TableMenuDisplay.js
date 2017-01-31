import React , {Component} from 'react'
import TableMenuItem from '../TableMenuItem/TableMenuItem'
const IMAGE_DEFAULT_URL = 'http://www.dirtyapronrecipes.com/wp-content/uploads/2015/10/food-placeholder.png'

const DEFAULT_BACKGROUND_URL = 'http://www.sawyoo.com/postpic/2011/08/mexican-restaurant-menu_426932.jpg'

export default class TableMenuDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let items;
    if( this.props.items ) {
      items = this.props.items.map( (item,i) => {
        if(!item.photo_url){
          item.photo_url = IMAGE_DEFAULT_URL
        }
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
            index = { i }
            background = { this.props.background }
           />
        )
      } )
    }
    let backgroundStyle;
    backgroundStyle = {
      backgroundImage:`url( ${ this.props.background } )`
    }
    return(
      <div style={backgroundStyle}>
        <header>{this.props.header}</header>
        <h3>{this.props.description}</h3>

          {items}


      </div>
    );
  }
}
