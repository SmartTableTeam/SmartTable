import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import store from '../../store'
import Modal from 'react-modal'
import '../edit-menu-category/edit-menu-category.scss'
import {getMenuItems} from '../../actions/index'
import {postMenuItem} from '../../actions/index'
import {getThisMenuItem} from '../../actions/index'
import'./Style.scss'
import axios from 'axios'
const MENU_ITEM_URL = '/api/menuitem'
class AddMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      description:'',
      ingredients:'',
      price:'',
      menu_id:''
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleDish(e) {
      e.preventDefault()
      const newMenuItem = {
          name: this.state.name,
          description: this.state.description,
          ingredients: this.state.ingredients,
          price: (this.state.price * 100),
          menu_id: this.props.categories[0].id
      }
      if(!newMenuItem.name){
        alert('Please Enter A Dish Name')
      }
      else {
        this.props.postMenuItem(newMenuItem)
        this.props.getMenuItems(newMenuItem.menu_id).then(()=>{
          this.closeModal()
        })
      }
  }

  handleName(e){
    this.setState({name:e.target.value})
  }

  render() {

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background            : 'tan',
        borderRadius          : '15px',
        border                : '4px solid lightgray',
        boxShadow             : "10px 10px 5px #888888"
      }
    }
    const btnStyle = {
      width : "100%",
      margin :'auto',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-around',
      marginTop: '16px'
    }
    return(
      <div>
        <button className='buttonStyle btn btn-default btn-lg' onClick={this.openModal.bind(this)}>Add Dish</button>

        <Modal isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal.bind(this)}
        onRequestClose={this.closeModal.bind(this)}
        style={customStyles}
        contentLabel="AddNewDish Modal">
          <h2 ref='subtitle'>Enter Dish Name</h2>
          <input className='form-control' onChange={this.handleName.bind(this)} required/>
          <div style={btnStyle}>
            <button className='btn btn-primary text-center' onClick={this.handleDish.bind(this)}>Add Dish</button>
            <button className='btn btn-danger text-center' onClick={this.closeModal.bind(this)}>Cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
}



function mapStateToProps(state) {
    return {menu_items: state.menu_items, categories: state.categories}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMenuItems: getMenuItems,
        postMenuItem: postMenuItem,
        getThisMenuItem:getThisMenuItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMenuItem)
