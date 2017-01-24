import React, {Component} from 'react'
import { Link } from 'react-router'
import '../edit-menu-category/edit-menu-category.scss'
import {connect} from 'react-redux'
import store from '../../store'
import {addCategory} from '../../redux/categories'
import {addDish} from '../../redux/categories'
import {categorySelected} from '../../redux/categories'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import {deleteMenu} from '../../actions/index'
import {menuSelected} from '../../actions/index'
import {getMenuItems} from '../../actions/index'
import {postMenuItem} from '../../actions/index'
import {getThisMenuItem} from '../../actions/index'
import TestModal from '../modal/modal'
import AddMenuItem from '../AddMenuItemModal/AddMenuItemModal'
import EditMenuItemModal from '../EditMenuItemModal/EditMenuItemModal'


class ManageDishes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            ingredients: '',
            price: '',
            newItems: false,
            name: '',
            menu_id: null,
            addDish:null
        }
    }


    componentWillMount() {

    }
    componentWillReceiveProps(nextProps){
      if(nextProps.categories.length === 1){
        this.setState({addDish:true})
      }
      else {
        this.setState({addDish:false})
      }
    }

    render() {

        let menuItems;
        menuItems = this.props.menu_items.map((item, i) => {
            return (
                <div key={i}>
                    <span id='name'>{item.name}</span>
                    <EditMenuItemModal
                       item = {item}
                      />
                </div>

            )
        })
        return (

            <div className='ManageDishes-container'>
                <div className='button-container'>
                  {this.state.addDish ? <AddMenuItem /> : null}
                <div>{this.state.addDish ? <h3>{this.props.categories[0].category}</h3> : null}</div>
                </div>

                <div className='dish-item-container'>
                    {menuItems}
                </div>

            </div>

        )
    }
}

function mapStateToProps(state) {
    return {menu_items: state.menu_items, categories: state.categories}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        menu: getMenu,
        deleteMenu: deleteMenu,
        menuSelected: menuSelected,
        getMenuItems: getMenuItems,
        postMenuItem: postMenuItem,
        getThisMenuItem:getThisMenuItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDishes)
