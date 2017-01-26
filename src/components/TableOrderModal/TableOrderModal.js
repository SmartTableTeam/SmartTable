import React from 'react';
import Modal from 'react-modal'
import TableOrderDetails from './TableOrderDetails'
class TableOrderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen:false};
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
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
    return(
      <div>
        <button onClick={this.openModal.bind(this)}>See Current Order</button>
        <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal.bind(this)}
         onRequestClose={this.closeModal.bind(this)}
         style={customStyles}
         contentLabel="EditMenuItem Modal"
       >
       <div><button className='btn btn-danger'>Clear</button><h3 ref='subtitle'>Current Order</h3></div>
        <TableOrderDetails
          openModal = {this.openModal}
          closeModal = {this.closeModal}
          tableId = {this.props.tableId}
         />
       </Modal>
      </div>
    );
  }
}
export default TableOrderModal;
