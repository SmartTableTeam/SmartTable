import React from 'react';
import MenuItems from './menuItems'

const IMAGE_DEFAULT_URL = 'http://www.dirtyapronrecipes.com/wp-content/uploads/2015/10/food-placeholder.png'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let menuItems;
    let backgroundStyle = {
        backgroundImage:`url( ${this.props.menu.banner_url} )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    if(this.props.items){
      menuItems = this.props.items.map((item,index)=> {
        if(!item.photo_url){
          item.photo_url = IMAGE_DEFAULT_URL
        }
        return (
          <MenuItems
          key={index}
          item = {item}
          index = {index}
          />
        )
      })
    }
    return(
      <div style={backgroundStyle}>

        <div>
          <h1>{this.props.menu.category}</h1>
          <h3>{this.props.menu.description}</h3>
        </div>

        <div className="">
          {menuItems}
        </div>

      </div>
    );
  }
}
export default Menu;
