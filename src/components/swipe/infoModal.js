import React from 'react';
import InfoIcon from 'react-icons/lib/fa/info'
import Modal from 'react-modal'
class InfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  // =  =  =  =  =  =  =  =  Modal Control  =  =  =  =  =  =  =  =
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle1.style.color = '#000';
    this.refs.subtitle2.style.color = '#000';
    this.refs.subtitle3.style.color = '#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.closeModal()
  }

  //  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =

    // =  =  =  =  =  =  =  =  = LifeCycle Hook  =  =  =  =  =  =  =  =
  componentWillReceiveProps(newProps){
    if(newProps.modalIsOpen){
      this.openModal()
    }
  }
  render() {
    var sectionStyle = {
        width: "400px",
        height: "400px",
        border: "1px solid black",
        clear: "both",
        margin:"auto",
        backgroundImage: `url( ${ this.props.item.photo_url }  )`,
        backgroundSize:"cover",
        backgroundPosition: "center",
        cursor:"pointer"
    };
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
    return(
      <div>
        <h1> <InfoIcon onClick={this.openModal.bind(this)}/> </h1>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Table Menu Item Modal"
          >
          <h1>Details</h1>
          <div style={sectionStyle}>

          </div>

          <div> <i> <h2 ref='subtitle1'>Chef Notes </h2> </i> <span>{this.props.item.notes}</span></div>
          <div> <i> <h2 ref='subtitle2'> Description </h2> </i> <span>{this.props.item.description}</span></div>
          <div> <i> <h2 ref='subtitle3'> Ingredients </h2> </i> <span>{this.props.item.ingredients}</span></div>
        </Modal>

      </div>
    );
  }
}
export default InfoModal;
