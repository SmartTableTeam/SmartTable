import React from 'react';
import Modal from 'react-modal'
import TableOrderDetails from './TableOrderDetails'
import {clearOrder} from '../../actions/tableOrder'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Restaraunt from 'react-icons/lib/md/local-restaurant'

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
        <h1><Restaraunt onClick={this.openModal.bind(this)} /></h1>
        <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal.bind(this)}
         onRequestClose={this.closeModal.bind(this)}
         style={customStyles}
         contentLabel="EditMenuItem Modal"
       >
       <div><button disabled={this.props.order.length < 1} onClick={()=> this.props.clear()}>Clear</button><h3 ref='subtitle'>Current Order</h3></div>
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

function mapStateToProps(state){
  return {
    order:state.table_order
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
      clear:clearOrder
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TableOrderModal)
