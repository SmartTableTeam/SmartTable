import React, {Component} from 'react'
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


class ManageDishes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            ingredients: '',
            price: '',
            newItems: false,
            name: '',
            menu_id: null
        }
        this.menuItems = this.menuItems.bind(this)
    }

    handleName(e) {
        this.setState({name: e.target.value})
    }

    handleDesc(e) {
        console.log(e.target.value);
        this.setState({description: e.target.value})
    }

    handleIng(e) {
        console.log(e.target.value);
        this.setState({ingredients: e.target.value})
    }

    handlePrice(e) {
        console.log(e.target.value);
        this.setState({price: e.target.value})
    }

    handleDish(e) {
        e.preventDefault()
        const newMenuItem = {
            name: this.state.name,
            description: this.state.description,
            ingredients: this.state.ingredients,
            price: (this.state.price * 100),
            menu_id: this.state.menu_id
        }

        console.log(newMenuItem);
        this.props.postMenuItem(newMenuItem)
        this.props.getMenuItems(newMenuItem.menu_id)
        this.state.name = '',
        this.state.description='',
        this.state.ingredients = '',
        this.state.price = '',
        this.state.name = ''

    }

    removeItem(item) {
        console.log(item);
        store.dispatch({type: 'REMOVE_DISH', payload: item})

    }

    menuItems() {
        console.log(this.props.categories.menuItem);
    }

    componentWillMount() {
        console.log(this.props.categories.length);

    }
    componentWillUpdate() {
        if (this.props.categories.length === 1) {
            console.log(this.props.categories);
        }
    }
    render() {
        console.log(this.props.categories.length);
        if (this.props.categories[0]) {
            console.log('@#$%^&*( (*&^%$))', this.props.categories[0].id);
            this.state.menu_id = this.props.categories[0].id
        }
        console.log(this.props.menu_items);
        let menuItems;
        menuItems = this.props.menu_items.map((item, i) => {
            return (
                <div key={i}>
                    <label htmlFor='name'>
                        <u>
                            <b>Menu_Item:
                            </b>
                        </u>
                    </label>
                    <span id='name'>{item.name}
                    </span>
                    /

                    <label htmlFor='desc'>
                        <u>
                            <b>Description:
                            </b>
                        </u>
                    </label>
                    <span id='desc'>{item.description}
                    </span>
                    /

                    <label htmlFor='ing'>
                        <u>
                            <b>Ingredients:
                            </b>
                        </u>
                    </label>
                    <span id='ing'>{item.ingredients}
                    </span>
                    /

                    <label htmlFor='price'>
                        <u>
                            <b>Price:
                            </b>
                        </u>
                    </label>
                    <span id='price'>{item.price / 100}
                        X</span>

                </div>

            )
        })
        return (

            <div className='ManageDishes-container'>
                <div className='button-container'>
                    <button className='btn btn-default btn-lg'>Add Dish</button>
                </div>

                <div className='dish-item-container'>
                    {menuItems}
                </div>
                <form onSubmit={this.handleDish.bind(this)} id='add-dish-container' className='form-group'>
                    <input className='form-control' value={this.state.name} onChange={this.handleName.bind(this)} required/>
                    Menu_Item
                    <input className='form-control' value={this.state.description} onChange={this.handleDesc.bind(this)}/>
                    Description:
                    <input className='form-control' value={this.state.ingredients} onChange={this.handleIng.bind(this)} required/>
                    Ingredients:
                    <input className='form-control' value={this.state.price} onChange={this.handlePrice.bind(this)} required/>
                    Price:
                    <button className='btn btn-default'>Save</button>
                    <button className='btn btn-default'>Delete</button>
                </form>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {menu_items: state.menu_items, categories: state.categories}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({menu: getMenu, deleteMenu: deleteMenu, menuSelected: menuSelected, getMenuItems: getMenuItems, postMenuItem:postMenuItem},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDishes)
