import React , { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import {deleteMenu} from '../../actions/index'
import {menuSelected} from '../../actions/index'
import {postMenu} from '../../actions/index'
import {getMenuItems} from '../../actions/index'
import {resetMenuItems} from '../../actions/index'
import {getTableMenu} from '../../actions/tableMenu'
import TableMenuDisplay from '../TableMenuDisplay/TableMenuDisplay'

class TableMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount(){
    this.props.getTableMenu()
  }
  render() {
    let table_menu;
    if(this.props.table_menu){
      table_menu = this.props.table_menu.map( (menu,i) => {
        return (
          <TableMenuDisplay
            key={i}
            header={menu.category}
            items = {menu.menuItems}
          />
        )
      })
    }
    return(
      <div>
        <h2>Table Menu</h2>
        <button onClick={()=>console.log(this.props.table_menu)}>Click for table_menu</button>
        <button onClick={()=>console.log(this.props.table_order)}>Click for table_order</button>
        {table_menu}
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {categories: state.categories,table_menu: state.table_menu,table_order: state.table_order}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        menu: getMenu,
        deleteMenu: deleteMenu,
        menuSelected: menuSelected,
        postMenu: postMenu,
        getMenuItems: getMenuItems,
        resetMenuItems: resetMenuItems,
        getTableMenu:getTableMenu
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TableMenu)
