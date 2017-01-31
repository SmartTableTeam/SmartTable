import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import TableMenuItemModal from '../TableMenuItemModal/TableMenuItemModal'
import MdThumbUp from 'react-icons/lib/fa/thumbs-up'
import {addOrder} from '../../actions/tableOrder'
import LocalRestaurant from 'react-icons/lib/fa/cutlery'
import axios from 'axios'
import Alert from 'react-s-alert';
import './Alert.scss'




const ORDER_URL = '/api/order'

class TableMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderNotes: "",
            addNote: null
        };
        this.addOrderNotes = this.addOrderNotes.bind(this)
        this.handleOrderItem = this.handleOrderItem.bind(this)
    }

    addOrderNotes(e) {
        this.setState({orderNotes: e.target.value})
    }

    handleOrderItem() {
        let orderItem = {
            menu_item_id: this.props.id,
            notes: this.state.orderNotes,
            index: this.props.table_order.length + 1,
            price:this.props.price,
            ingredients:this.props.ingredients,
            name:this.props.name
        };
        this.props.addOrder(orderItem)
        if(!orderItem.notes){
          // alert(`Your Dish "${orderItem.name}" Has Been Added`)
          this.handleSuccess(orderItem)
          this.setState({addNote:false})
          this.setState({orderNotes:''})
        }
        else {
          // alert(`Your Dish "${orderItem.name}" Has Been Added With Note Of "${orderItem.notes}"`)
          this.handleSuccessNotes(orderItem)
          this.setState({addNote:false})
          this.setState({orderNotes:''})
        }

    }


    handleSuccess(orderItem) {
     Alert.warning(`Your Dish "${orderItem.name}" Has Been Added!`, {
         position: 'top-right'
     });
   }

   handleSuccessNotes(orderItem){
     Alert.warning(`Your Dish "${orderItem.name}" Has Been Added! With Note Of "${orderItem.notes}"`, {
         position: 'top-right'
     });
   }

    render() {


        var sectionStyle = {
            width: "200px",
            height: "200px",
            border: "1px solid black",
            clear: "both",
            backgroundImage: `url( ${this.props.photo}  )`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer"
        };

        var optionsStyle = {
            height: "80%",
            width: "150px",
            border: "1px solid black",
            float: "right"
        }

        var floatRight = {
            float: "right"
        }

        var itemStyle = {
            marginBottom:"46px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }

        return (
            <div style={itemStyle} className='TableMenuItem_wrapper'>
                <div style={sectionStyle}></div>

                <div className='Item_description_container'>
                    <h2>
                        <b>{this.props.name}</b>
                    </h2>
                    <h4>{this.props.ingredients}</h4>
                </div>

                <div style={optionsStyle}>
                    <h4><MdThumbUp onClick={this.handleOrderItem}/></h4>
                    <span onClick={() => {
                        this.setState({addNote: !this.state.addNote})}}>Add Note</span>
                    {this.state.addNote ? <div><textarea onChange={this.addOrderNotes}></textarea></div>: null}
                    <h4>{this.props.price / 100}</h4>
                    <span style={floatRight}><TableMenuItemModal photo={this.props.photo} notes={this.props.notes} ingredients={this.props.ingredients}/></span>

                </div>
                <Alert stack={true} timeout={3000} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {table_menu: state.table_menu, table_order: state.table_order}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addOrder: addOrder
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TableMenuItem)
