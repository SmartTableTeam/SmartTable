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
            addCategoryButton:null ,
            lightenStyle:{
              opacity:'.09'
            }
                 }
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
      let formStyle = {
        marginBottom:"26px"
      }
        return (
            <div id='category-container-wrapper' style={(this.props.categories.length === 1) ? this.state.lightenStyle : null}>
                <div className='container-fluid'>

                    <div className='button-container'>
                        <button disabled={this.props.categories.length === 1} className='buttonStyle btn btn-default btn-lg' onClick={this.addCategory.bind(this)}>Add Category</button>
                        {this.state.addCategory ? <button onClick ={()=>this.setState({addCategory:false})} className='buttonStyle btn btn-default btn-md'>Back</button> : null}
                    </div>

                    {this.state.addCategory ? <form style={formStyle} onSubmit={this.onSubmit.bind(this)}>
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
