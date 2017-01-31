import React, {Component} from 'react';
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

const DEFAULT_BACKGROUND_URL = 'http://www.sawyoo.com/postpic/2011/08/mexican-restaurant-menu_426932.jpg'

class TableMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_account_id: null
        };
        this.loginTable = this.loginTable.bind(this)
    }

    loginTable() {
        axios.post(`/api/auth/table/login`, {table_account_id: 2}).then(response => {
            console.log(response.data)
            this.setState({table_account_id: response.data.id})
        })
    }

    componentWillMount() {
        this.props.getTableMenu()
    }
    render() {
        let table_menu;
        if (this.props.table_menu) {
            table_menu = this.props.table_menu.map((menu, i) => {
              if(!menu.banner_url){
                menu.banner_url = DEFAULT_BACKGROUND_URL
              }
                return (<TableMenuDisplay
                  key={i}
                  header={menu.category}
                  background={menu.banner_url}
                  items={menu.menuItems}
                  description={menu.description}
                  />)
            })
        }
        return (
            <div>
                <h2>Table Menu
                </h2>
                <h4>Current Orders : {this.props.table_order.length}</h4>
                <TableOrderModal tableId={this.state.table_account_id}/> {table_menu}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {categories: state.categories, table_menu: state.table_menu, table_order: state.table_order}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        menu: getMenu,
        deleteMenu: deleteMenu,
        menuSelected: menuSelected,
        postMenu: postMenu,
        getMenuItems: getMenuItems,
        resetMenuItems: resetMenuItems,
        getTableMenu: getTableMenu
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TableMenu)
