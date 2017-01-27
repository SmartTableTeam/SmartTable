import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMenu} from '../../actions/index'
import TableMenuItemModal from '../TableMenuItemModal/TableMenuItemModal'
import MdThumbUp from 'react-icons/lib/fa/thumbs-up'
import {addOrder} from '../../actions/tableOrder'
import LocalRestaurant from 'react-icons/lib/fa/cutlery'
import axios from 'axios'

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
        this.tableMenuItemArray = this.tableMenuItemArray.bind(this)
        this.findMatch = this.findMatch.bind(this)
    }

    addOrderNotes(e) {
        this.setState({orderNotes: e.target.value})
    }

    handleOrderItem() {

        let orderItem = {
            menu_item_id: this.props.id,
            notes: this.state.orderNotes
        };

        var menuItemArray = this.tableMenuItemArray()
        var newOrderItemArray = this.findMatch(orderItem, menuItemArray)
        this.props.addOrder(newOrderItemArray)
        if(newOrderItemArray[0].orderNotes){
          alert(`Your Dish has Been Added With The Note Of "${newOrderItemArray[0].orderNotes}"`)
          this.setState({addNote:false})
        }
        else{
          alert('Your Dish Has Been Added')
          this.setState({addNote:false})
        }
    }


    tableMenuItemArray() {
        let myArray = []
        this.props.table_menu.forEach(obj => {
            obj.menuItems.forEach(item => {
                myArray.push(item)
            })
        })
        return myArray
    }

    findMatch(orderObj, menuArray) {
        let myArray = [];
        let i = 0,
            j = menuArray.length
        for (i; i < j; i++) {
            if (menuArray[i].id === orderObj.menu_item_id) {
                menuArray[i].orderNotes = orderObj.notes
                myArray.push(menuArray[i])
            }
        }
        return myArray
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
                        this.setState({addNote: !this.state.addNote})
                      }}>Add Note</span>
                    {this.state.addNote
                        ? <div>
                                <textarea onChange={this.addOrderNotes}></textarea>
                            </div>
                        : null}
                    <h4>{this.props.price / 100}</h4>
                    <span style={floatRight}><TableMenuItemModal photo={this.props.photo} notes={this.props.notes} ingredients={this.props.ingredients}/></span>

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
        addOrder: addOrder
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TableMenuItem)
