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
import FaBars from 'react-icons/lib/fa/bars'

const MENU_ITEM_URL = '/api/menuitem'

const DEFAULT_IMAGE_URL = 'http://www.dirtyapronrecipes.com/wp-content/uploads/2015/10/food-placeholder.png'

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
    this.checkSame = this.checkSame.bind(this)
    this.isEmpty = this.isEmpty.bind(this)
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
    const oldObj = {
      name:this.props.item.name,
      description:this.props.item.description,
      ingredients:this.props.item.ingredients,
      price:this.props.item.price,
      notes:this.props.item.notes,
      photo_url:this.props.item.photo_url,
      id:this.props.item.id
    }

    let newUpdateObj;
    newUpdateObj = this.filterObj(updateObj)
      axios.put(`${MENU_ITEM_URL}`,newUpdateObj).then(response => this.closeModal())
      .then( () => {
          alert('Your Update Was Successful')
      })

  }

  checkSame(obj,newObj){
    for (var i in obj){
      for (var k in newObj){
        if(i === k){
          if(obj[i] === newObj[k]){
            console.log('matching value', obj[i],newObj[k])
            delete newObj[k]
          }
        }
      }
    }
    var newObjCheck = this.isEmpty(newObj)
    if(!!newObjCheck){
      return newObj
    }
    else {
      return 'The Object is the same as before '
    }
  }

  isEmpty(obj){
    for(var prop in obj){
    if(obj.hasOwnProperty(prop)){
      return true
    }
    return false
  }

  }

// =====================================================================

filterObj(obj){
  for(let k in obj){
    if(!obj[k]){
        delete obj[k]
    } else {
    }
  }
  return obj
}

  newObjIsNotEmpty(newObj) {
    for (let prop in newObj) {
        if (newObj.hasOwnProperty(prop))
        return newObj
    }
    alert('Please Fill Out One Of The Following Fields')
    return false
  }


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
    if(!this.props.item.photo_url){
      this.props.item.photo_url = DEFAULT_IMAGE_URL
    }
    const customStyles = {
      content : {
        height                : '80vh',
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
        border: "1px solid gray",
        clear: "both",
        backgroundImage: `url( ${this.props.item.photo_url}  )`,
        backgroundSize:"cover",
        backgroundPosition: "center",
        marginTop:"53px",
        marginBottom: "53px",
        cursor:"pointer"
    };

    let pointerStyle = {
      cursor:"pointer"
    }

    let buttonStyle = {
      width : '100%',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center',
      marginTop : '34px'
    }

    return (
      <div>
      <h4><FaBars style={pointerStyle} onClick={this.openModal.bind(this)}></FaBars></h4>
      <Modal
       isOpen={this.state.modalIsOpen}
       onAfterOpen={this.afterOpenModal.bind(this)}
       onRequestClose={this.closeModal.bind(this)}
       style={customStyles}
       contentLabel="EditMenuItem Modal"
     >
        <div className='edit-container'>
            <h1 ref='subtitle'>DISH</h1>
            <h3>{this.props.item.name}</h3>
            <div style={sectionStyle}></div>

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
            </form>

        </div>
        <div style={buttonStyle} className="col-md-8">
            <input type="button" onClick={this.updateMenuItem.bind(this)} className="btn btn-primary" value="Save Changes"/>

            <input type="reset" className="btn btn-danger" onClick={this.closeModal.bind(this)}value="Close"/>

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
