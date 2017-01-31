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
import AddMenuItem from '../AddMenuItemModal/AddMenuItemModal'
import EditMenuItemModal from '../EditMenuItemModal/EditMenuItemModal'
import {resetMenuItems} from '../../actions/index'

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


    backAndReset(){
      this.props.menu()
      this.props.resetMenuItems()
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
        let containerStyle = {
          width : "80%",
          margin:"auto",
          textAlign: "center",
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          marginBottom:'26px'
        }
        let headerStyle = {
          marginTop:"46px",
          marginBottom:"46px",
          textAlign:'center'
        }
        let pointerStyle = {
          cursor:"pointer"
        }
        let menuItems;
        menuItems = this.props.menu_items.map((item, i) => {
            return (
                <div style={containerStyle} key={i}>
                    <h4><span style={pointerStyle} id='name'>{item.name}</span></h4>
                    <EditMenuItemModal
                       item = {item}
                      />
                </div>

            )
        })
        return (

            <div className='ManageDishes-container'>
                <div style={containerStyle}>
                  {this.state.addDish ? <AddMenuItem /> : null}
                  {(this.props.categories.length === 1) ? <button className='btn btn-md' onClick={()=>this.backAndReset()}>Back</button> : null }
                </div>

                <div className='dish-item-container'>
                  <div style={headerStyle}>{this.state.addDish ? <h3>{this.props.categories[0].category}</h3> : null}</div>
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
        getThisMenuItem:getThisMenuItem,
        resetMenuItems:resetMenuItems
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDishes)
