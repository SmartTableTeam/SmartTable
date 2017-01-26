import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import TableMenuItemModal from '../TableMenuItemModal/TableMenuItemModal'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import {getOrder} from '../../actions/tableOrder'
import {addOrder} from '../../actions/tableOrder'
import LocalRestaurant from 'react-icons/lib/fa/cutlery'
import axios from 'axios'

const ORDER_URL = '/api/order'
class TableMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderNotes: ""
        };
        this.addOrderNotes = this.addOrderNotes.bind(this)
        this.handleOrderItem = this.handleOrderItem.bind(this)
        this.alertOptions = {
            offset: 14,
            position: 'bottom left',
            theme: 'dark',
            time: 5000,
            transition: 'scale'
        };
    }

    addOrderNotes(e) {
        this.setState({orderNotes: e.target.value})
    }

    handleOrderItem() {
        console.log(this.props.tableId);
        let orderItem = {
            menu_item_id: this.props.id,
            notes: this.state.orderNotes
        };
        // console.log(orderItem);
        // axios.post(`${ORDER_URL}`,orderItem).then(response => {
        //   console.log(response);
        // })
        this.props.addOrder(orderItem)
        alert('Your Dish Has Been Added')
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
          height:"80%",
          width:"150px",
          border:"1px solid black",
          float:"right"
        }

        var floatRight = {
          float:"right"
        }

        var itemStyle = {
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between"
        }
        return (
            <div style={itemStyle} className='TableMenuItem_wrapper'>
                <div style={sectionStyle}></div>

                <div className='Item_description_container'>
                    <h4>
                        <b>{this.props.name}</b>
                    </h4>
                    <p>{this.props.ingredients}</p>
                </div>

                <div style={optionsStyle}>
                  <h4><MdThumbUp onClick={this.handleOrderItem}/></h4>
                  <h4>{this.props.price / 100}</h4>
                    <span style={floatRight}><TableMenuItemModal  photo={this.props.photo} notes={this.props.notes} ingredients={this.props.ingredients} /></span>
                </div>



            </div>
        );
    }
}

function mapStateToProps(state) {
    return {table_menu: state.table_menu, table_order: state.table_order}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        order: getOrder,
        addOrder: addOrder
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TableMenuItem)
