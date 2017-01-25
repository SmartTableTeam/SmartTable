import React, {Component} from 'react'
import './edit-menu-category.scss'
import {connect} from 'react-redux'
import {addCategory} from '../../redux/categories'
import store from '../../store'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import {deleteMenu} from '../../actions/index'
import {menuSelected} from '../../actions/index'
import {postMenu} from '../../actions/index'
import {getMenuItems} from '../../actions/index'
import {resetMenuItems} from '../../actions/index'
import FaEdit from 'react-icons/lib/fa/edit'
import FaErase from 'react-icons/lib/fa/eraser'
import EditMenuInput from './edit-menu-category-input'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCategory: '',
            addCategory:false,
            addCategoryButton:null,
            editMenu:false
        }
        this.editMenu = this.editMenu.bind(this)
    }
    addCategory() {
    this.setState({addCategory:!this.state.addCategory})
    }

    onChange(e) {
        e.preventDefault()
        this.setState({newCategory: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.postMenu(this.state.newCategory)
        this.setState({newCategory: ''})
    }

    deleteAndGet(id) {
        this.props.deleteMenu(id).then(() => {
            this.props.menu()
        })
    }

    selectAndGetItems(id) {
        this.setState({addCategory:false})
        this.props.menuSelected(id)
        this.props.getMenuItems(id)

    }

    editMenu(){
      this.setState({editMenu:!this.state.editMenu})
    }

    backAndReset() {
      this.setState({addCategory:false})
        this.props.menu()
        this.props.resetMenuItems()
    }

    componentWillMount() {
        this.props.menu()
    }


    render() {

        return (
            <div id='category-container'>
                <div className='container-fluid'>

                    <div className='button-container'>
                        <button className='btn btn-default btn-lg' onClick={this.addCategory.bind(this)}>Add Category</button>
                        <button onClick={this.backAndReset.bind(this)} className='btn btn-default btn-md'>Back</button>
                    </div>

                    {this.state.addCategory ? <form onSubmit={this.onSubmit.bind(this)}>
                        <input ref='val' value={this.state.newCategory} onChange={this.onChange.bind(this)} type='text' className='form-control'/>
                    </form> : null }


                </div>
                <div>{this.props.categories.map((cat, i) => {
                        return (
                          <div key={i}>

                            <h4 onClick={this.selectAndGetItems.bind(this, cat.id)}> { cat.category } </h4>

                                <h4><FaErase onClick={this.deleteAndGet.bind(this, cat.id)} /></h4>
                                <h4><FaEdit onClick={this.editMenu} /></h4>
                                {this.state.editMenu ? <input/> : null}
                          </div>
                        )
                    })}</div>
            </div>

        )
    }
}

function mapStateToProps(state) {

    return {categories: state.categories}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        menu: getMenu,
        deleteMenu: deleteMenu,
        menuSelected: menuSelected,
        postMenu: postMenu,
        getMenuItems: getMenuItems,
        resetMenuItems: resetMenuItems
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)
