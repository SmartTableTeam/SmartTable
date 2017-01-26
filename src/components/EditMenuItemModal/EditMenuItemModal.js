import React , {Component} from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getThisMenuItem} from '../../actions/index'
import {getMenuItems} from '../../actions/index'
import {updateMenuItem} from '../../actions/index'
import {hashHistory} from 'react-router'
import {resetMenuItems} from '../../actions/index'
import {getMenu} from '../../actions/index'

const MENU_ITEM_URL = 'http://localhost:1701/api/menuitem'

class EditMenuItemModal extends Component {
  constructor(props){
    super(props)

    this.state ={
      name: '',
      description: '',
      ingredients: '',
      price: '',
      notes: '',
      photo_url: ''
    }
  }
  onChangeName(e) {
    this.setState({name:e.target.value})
  }

  onChangeDescription(e) {
    this.setState({description:e.target.value})
  }

  onChangeIngredients(e) {
    this.setState({ingredients:e.target.value})
  }

  onChangePrice(e) {
    this.setState({price:e.target.value})
  }

  onChangeNotes(e) {
    this.setState({notes:e.target.value})
  }

  onChangePhoto(e) {
    this.setState({photo_url:e.target.value})
  }

  updateMenuItem(e){
    let updateObj =
    {
      name:this.state.name,
      description:this.state.description,
      ingredients:this.state.ingredients,
      price:(this.state.price * 100),
      notes:this.state.notes,
      photo_url:this.state.photo_url,
      id:this.props.item.id
    };
    let newUpdateObj;
    newUpdateObj = this.filterObj(updateObj)
    axios.put(`${MENU_ITEM_URL}`,newUpdateObj).then(response => this.props.getMenuItems(this.props.item.menu_id)).then(response => {
      alert('Your Update Was Successful')
    })
  }

  filterObj(obj){
    for(let k in obj){
      if(!obj[k]){
          delete obj[k]
      } else {
      }
    }
    return obj
  }
// ======================================================================



// ==================================================


  openModal() {
    let item = this.props.item
    this.setState({modalIsOpen: true});

  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    let menu_id = this.props.item.menu_id;
    this.props.getMenuItems(menu_id)
    this.setState({modalIsOpen: false});
  }



// ========================================================


  render(){
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    }
    var sectionStyle = {
        width: "400px",
        height: "400px",
        margin: "auto",
        border: "1px solid black",
        clear: "both",
        backgroundImage: `url( ${this.props.item.photo_url}  )`,
        backgroundSize:"cover",
        backgroundPosition: "center",
        cursor:"pointer"
    };


    return (
      <div>
      <button onClick={this.openModal.bind(this)}>Update</button>
      <Modal
       isOpen={this.state.modalIsOpen}
       onAfterOpen={this.afterOpenModal.bind(this)}
       onRequestClose={this.closeModal.bind(this)}
       style={customStyles}
       contentLabel="EditMenuItem Modal"
     >
        <div className='edit-container'>
            <h1 ref='subtitle'>menuItemEdit</h1>

            <form className="form-horizontal" role="form">
                <div className="form-group">
                    <label className="col-lg-3 control-label">Name:</label>
                    <div className="col-lg-8">
                        <input onChange={this.onChangeName.bind(this)} defaultValue={this.props.item.name} className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Description:</label>
                    <div className="col-lg-8">
                        <input onChange={this.onChangeDescription.bind(this)} defaultValue={this.props.item.description} className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Ingredients:</label>
                    <div className="col-lg-8">
                        <input onChange={this.onChangeIngredients.bind(this)} defaultValue={this.props.item.ingredients} className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Price:</label>
                    <div className="col-lg-8">
                        <input onChange={this.onChangePrice.bind(this)} defaultValue={this.props.item.price / 100} className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Notes:</label>
                    <div className="col-lg-8">
                        <input onChange={this.onChangeNotes.bind(this)} defaultValue={this.props.item.notes} className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Photo_Url:</label>
                    <div className="col-lg-8">
                        <input onChange={this.onChangePhoto.bind(this)} defaultValue={this.props.item.photo_url} className="form-control" type="text"/>
                    </div>
                </div>
                <div className="col-md-8">
                    <input type="button" onClick={this.updateMenuItem.bind(this)} className="btn-primary" value="Save Changes"/>

                    <input type="reset" className="btn btn-default" onClick={this.closeModal.bind(this)}value="Cancel"/>

                </div>
            </form>

            <div style={sectionStyle}></div>

        </div>
     </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {menu_items: state.menu_items}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getThisMenuItem: getThisMenuItem,
        getMenuItems: getMenuItems,
        updateMenuItem: updateMenuItem,
        resetMenuItems: resetMenuItems,
        menu: getMenu
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EditMenuItemModal)
