import React from 'react';
import Modal from 'react-modal'
import FaBars from 'react-icons/lib/fa/bars'
import sectionStyle from '../EditMenuItemModal/EditMenuItemModal'
import axios from 'axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getMenu} from '../../actions/index'
const MENU_URL = '/api/menu'

// const DEFAULT_BACKGROUND_URL = 'http://www.sawyoo.com/postpic/2011/08/mexican-restaurant-menu_426932.jpg'
const DEFAULT_BACKGROUND_URL = 'http://www.babaimage.com/images/qianqian-li-design-vintage-paper-background-images-2.jpg'

class EditMenuModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImage:false,
      background:this.props.category.banner_url,
      description:this.props.category.description
    };
  }

  handleSubmit(){
    let updateObj = {
      banner_url:this.state.background,
      description:this.state.description,
      id:this.props.category.id
    };
    axios.put(`${MENU_URL}`,updateObj).then(response => {
      this.props.menu()
      alert('Your Update Was Successful')
      this.closeModal()
    })
    .catch(err => {
      alert('Sorry Something Went Wrong Please Try Again')
      this.closeModal()
    })
  }

  openModal() {
    let item = this.props.item
    this.setState({modalIsOpen: true});

  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount(){
    if(!this.props.category.banner_url){
      this.setState({defaultImage:true})
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category.banner_url !== this.props.category.banner_url && !nextProps.category.banner_url && nextProps.category.id === this.props.category.id){
      this.setState({defaultImage:true})
    }
    else {
      this.setState({defaultImage:false})
    }
  }

  render() {
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
        marginBottom: "16px",
        border: "1px solid black",
        clear: "both",
        backgroundImage: `url( ${this.props.category.banner_url}   )`,
        backgroundSize:"cover",
        backgroundPosition: "center",
        cursor:"pointer"
    };
    if(!this.props.category.banner_url){
      this.props.category.banner_url = DEFAULT_BACKGROUND_URL
    }
    const buttonStyle = {
      margin:"auto",
      width:"55%",
      display:'flex',
      flexDirection:'row',
      justifyContent:"space-between",
      marginTop:"24px"
    }
    return(
      <div>
        <h4><FaBars onClick={this.openModal.bind(this)}/></h4>
        <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal.bind(this)}
        onRequestClose={this.closeModal.bind(this)}
        style={customStyles}
        contentLabel="EditMenu Modal">

          <button onClick={()=> console.log(this.props.category)}>Click for Category</button>

            <h1 ref='subtitle'>Menu Edit</h1>
            <h3>{this.props.category.category}</h3>
            <div style={sectionStyle}></div>

          <label htmlFor='banner_url'>Background : </label>

            {this.state.defaultImage ? <span><i><u>Default Image Url shown below</u></i></span> : null}

            <input
            onChange={(e)=> this.setState({background:e.target.value})}
             defaultValue={this.props.category.banner_url}
             id='banner_url'
             className='form-control' />

            <label htmlFor='description'>Description</label>

            <input
            onChange={(e)=> this.setState({description:e.target.value})}
            defaultValue={this.props.category.description}
            id='description'
            className='form-control' />
          <div style={buttonStyle}>
            <input type="button" className='btn btn-primary' onClick={this.handleSubmit.bind(this)} value='Save Changes'/>
              <button className='btn btn-danger btn-md' onClick={this.closeModal.bind(this)}>Close</button>
          </div>


        </Modal>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    menu:getMenu
  },dispatch)
}
export default connect(null,mapDispatchToProps)(EditMenuModal)
