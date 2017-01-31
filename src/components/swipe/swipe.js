import React from 'react';
import {getTableMenu} from '../../actions/tableMenu'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import Menu from './menu'
import Left from 'react-icons/lib/md/arrow-back'
import Right from 'react-icons/lib/md/arrow-forward'
import OrderModal from './OrderModal'

// const DEFAULT_BACKGROUND_URL = 'http://www.sawyoo.com/postpic/2011/08/mexican-restaurant-menu_426932.jpg'
const DEFAULT_BACKGROUND_URL = 'http://www.babaimage.com/images/qianqian-li-design-vintage-paper-background-images-2.jpg'

class Swipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.menu()
  }
  render() {
    const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

    let views = this.props.table_menu.map( (menu,i) => {
      if(!menu.banner_url){
        menu.banner_url = DEFAULT_BACKGROUND_URL
      }
      return (
        <Menu
        key={i}
        menu={menu}
        items={menu.menuItems}
        />
      )
    })
    return(
      <div className="">
      <h1>Table Menu</h1>
      <div> <h4>Use Arrows <Left /> and <Right /> To Navigate</h4> </div>
      <div> <OrderModal /> </div>
      <BindKeyboardSwipeableViews>
        {views}
      </BindKeyboardSwipeableViews>
      </div>



    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    menu:getTableMenu
  },dispatch)
}
function mapStateToProps(state){
    return {
      table_menu:state.table_menu
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Swipe)
