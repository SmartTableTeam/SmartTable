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
import TableOrderModal from '../TableOrderModal/TableOrderModal'
import axios from 'axios'
class TableMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {table_account_id : null};
    this.loginTable = this.loginTable.bind(this)
  }

  loginTable(){
    axios.post(`/api/auth/table/login`,{table_account_id:2}).then(response =>{
      console.log(response.data)
      this.setState({table_account_id:response.data.id})
    })
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
        <h2>Table Menu </h2><span>Current Orders : {this.props.table_order.length}</span>
        <button onClick={()=>console.log(this.props.table_menu)}>Click for table_menu</button>
        <button onClick={()=>console.log(this.props.table_order)}>Click for table_order</button>
        <button onClick={()=>this.loginTable()}>Login Table</button>
        <TableOrderModal tableId = {this.state.table_account_id} />
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
