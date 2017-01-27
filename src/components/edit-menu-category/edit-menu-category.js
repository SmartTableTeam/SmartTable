import React, {Component} from 'react'
import './edit-menu-category.scss'
import {connect} from 'react-redux'
import {addCategory} from '../../redux/categories'
import store from '../../store'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import {deleteMenu} from '../../actions/index'
import {postMenu} from '../../actions/index'
import {getMenuItems} from '../../actions/index'
import {resetMenuItems} from '../../actions/index'
import MenuComponent from './edit-menu-category-name'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCategory: '',
            addCategory:false,
            addCategoryButton:null        }
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


    backAndReset() {
      this.setState({addCategory:false})
        this.props.menu()
        this.props.resetMenuItems()
    }

    componentWillMount() {
        this.props.menu()
    }


    render() {

      let categories = this.props.categories.map((cat, i) => {
                return (
                  <MenuComponent
                    key={i}
                    category={cat}
                    onClick = {() => {
                      this.setState({addCategory:false})
                    }}
                  />
              )
          })
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
                <div>{categories}</div>
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
        postMenu: postMenu,
        getMenuItems: getMenuItems,
        resetMenuItems: resetMenuItems
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)
