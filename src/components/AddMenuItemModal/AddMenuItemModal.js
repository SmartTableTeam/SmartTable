import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import store from '../../store'
import Modal from 'react-modal'
import '../edit-menu-category/edit-menu-category.scss'
import {getMenuItems} from '../../actions/index'
import {postMenuItem} from '../../actions/index'
import {getThisMenuItem} from '../../actions/index'

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
          menu_id: this.state.menu_id
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
        transform             : 'translate(-50%, -50%)'
      }
    }
    if (this.props.categories[0]) {
        this.state.menu_id = this.props.categories[0].id
    }
  // ===========================================

        var sectionStyle = {
            width: "400px",
            height: "400px",
            margin: "auto",
            border: "1px solid black",
            clear: "both",
            backgroundImage: `url( ${this.props.menu_items.photo_url}  )`,
            backgroundSize:"cover",
            backgroundPosition: "center",
            cursor:"pointer"
        };
// ====================================================================

    return(
      <div>
        <button className='btn btn-default btn-lg' onClick={this.openModal.bind(this)}>Add Dish</button>

        <Modal isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal.bind(this)}
        onRequestClose={this.closeModal.bind(this)}
        style={customStyles}
        contentLabel="AddNewDish Modal">
          <h2 ref='subtitle'>Enter Dish Name</h2>
          <input className='form-control' onChange={this.handleName.bind(this)} required/>
          <button className='btn' onClick={this.handleDish.bind(this)}>Add Dish</button>
          <button className='btn' onClick={this.closeModal.bind(this)}>Cancel</button>
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
