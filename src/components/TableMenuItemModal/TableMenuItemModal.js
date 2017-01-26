import React from 'react';
import Modal from 'react-modal'
import InfoIcon from 'react-icons/lib/fa/info'
export default class TableMenuItemModal extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      modalIsOpen:false
    }
  }
    openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.refs.subtitle1.style.color = '#000';
      this.refs.subtitle2.style.color = '#000';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
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
};

  var sectionStyle = {
      width: "400px",
      height: "400px",
      border: "1px solid black",
      clear: "both",
      margin:"auto",
      backgroundImage: `url( ${ this.props.photo }  )`,
      backgroundSize:"cover",
      backgroundPosition: "center",
      cursor:"pointer"
  };
    return(
      <div>
      <h3><InfoIcon onClick={this.openModal.bind(this)}><i>INFO</i></InfoIcon></h3>
     <Modal
       isOpen={this.state.modalIsOpen}
       onAfterOpen={this.afterOpenModal.bind(this)}
       onRequestClose={this.closeModal.bind(this)}
       style={customStyles}
       contentLabel="Table Menu Item Modal"
     >
     <div className="">
     <div style={sectionStyle}></div>
     <div><h4 ref='subtitle1'>{`Chef's Notes`}</h4>
     <p>{this.props.notes}</p>
     </div>

     <div><h4 ref='subtitle2'>More</h4>
      <p>{this.props.ingredients}</p>
     </div>
     </div>

     </Modal>
     </div>
    );
  }
}
