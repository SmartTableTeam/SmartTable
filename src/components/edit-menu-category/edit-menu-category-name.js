import React from 'react';
import {getMenuItems} from '../../actions/index'
import {menuSelected} from '../../actions/index'
import {getMenu} from '../../actions/index'
import {deleteMenu} from '../../actions/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FaEdit from 'react-icons/lib/fa/edit'
import FaErase from 'react-icons/lib/fa/eraser'
import axios from 'axios'

const MENU_URL = 'http://localhost:1701/api/menu'

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:false,category:''};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  selectAndGetItems(id) {
      this.setState({clicked:false})
      this.setState({addCategory:false})
      this.props.menuSelected(id)
      this.props.getMenuItems(id)
      this.props.onClick()

  }

  deleteAndGet(id) {
      this.props.deleteMenu(id).then(() => {
          this.props.menu()
      })
  }

  handleChange(e){
    this.setState({category:e.target.value})
  }

  handleSubmit(){
    let updateMenu;
    updateMenu = {
      id:this.props.category.id,
      category:this.state.category
    }
    if(!updateMenu.category){
      alert('Please Make A Change Or Press Close To Continue')
    }
    else {
      axios.post(`${MENU_URL}`,updateMenu).then(response => {
        this.props.menu().then(()=>{
          this.setState({clicked:false})
          alert('Category Has Been Updated')
        })
      })
    }

  }


  render() {

    return(
      <div>
      <h4 onClick={this.selectAndGetItems.bind(this, this.props.category.id)}> { this.props.category.category } </h4>

          <h4><FaErase onClick={this.deleteAndGet.bind(this, this.props.category.id)} /></h4>
          <h4><FaEdit onClick={()=>{
              this.setState({clicked:!this.state.clicked})
              this.props.onClick()
            }}/>{this.state.clicked ? <div>
              <input defaultValue={this.props.category.category} onChange={this.handleChange}className='form-control'/>
              <button className='btn btn-warning' onClick={this.handleSubmit}>Submit</button>
              <button className='btn btn-danger' onClick={()=>this.setState({clicked:false})}>Close</button>
              </div> : null}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {

    return {categories: state.categories}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      menuSelected: menuSelected,
      getMenuItems:getMenuItems,
      menu:getMenu,
      deleteMenu,deleteMenu
    },dispatch)
  }
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
