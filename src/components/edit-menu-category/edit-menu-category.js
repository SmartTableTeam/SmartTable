import React, {Component} from 'react'
import './edit-menu-category.scss'
import {connect} from 'react-redux'
import {addCategory} from '../../redux/categories'
// import { bindActionCreators } from 'redux'
import store from '../../store'
import axios from 'axios'
const ROOT_URL = 'http://localhost:1701/api/menu'
const DETAILS = '/list/details'
import CurrentCategories from '../edit-menu-current-categories/current-categories'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import {deleteMenu} from '../../actions/index'
import {menuSelected} from '../../actions/index'
import {postMenu} from '../../actions/index'
import {getMenuItems} from '../../actions/index'

class Category extends Component {
    constructor(props) {
        super(props)
        console.log('setting initial state');
        this.state = {
            newCategory: '',
            categoryArray: [],
            menus: []
        }
        // this.handleCategory = this.handleCategory.bind(this)
    }
    onChange(e) {
        e.preventDefault()
        this.setState({newCategory: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.postMenu(this.state.newCategory)
        this.setState({newCategory: ''})
        console.log(this.state.newCategory);
        // this.props.menu()

    }

    deleteAndGet(id) {
        this.props.deleteMenu(id).then(() => {
            this.props.menu()
        })
    }

    selectAndGetItems(id) {
        this.props.menuSelected(id)
        this.props.getMenuItems(id)

    }

    componentWillMount() {
        this.props.menu()
    }
    render() {

        console.log(this.props.categories);
        console.log(this.props.deleteMenu);
        return (

            <div id='category-container'>
                <div className='container-fluid'>

                    <div className='button-container'>
                        <button className='btn btn-default btn-lg'>Add Category</button>
                        <button onClick={this.props.menu.bind(this)} className='btn btn-default btn-md'>Back</button>
                    </div>

                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input ref='val' value={this.state.newCategory} onChange={this.onChange.bind(this)} type='text' className='form-control'/>
                    </form>

                </div>
                <div>{this.props.categories.map((cat, i) => {
                        return (
                            <h4 key={i} onClick={this.selectAndGetItems.bind(this, cat.id)}>
                                {cat.category}
                                <span onClick={this.deleteAndGet.bind(this, cat.id)}>X</span>
                            </h4>
                        )
                    })}</div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    console.log('State change detected!');
    return {categories: state.categories}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        menu: getMenu,
        deleteMenu: deleteMenu,
        menuSelected: menuSelected,
        postMenu: postMenu,
        getMenuItems: getMenuItems
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)
