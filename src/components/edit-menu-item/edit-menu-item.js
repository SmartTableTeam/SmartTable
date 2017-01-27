import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getThisMenuItem} from '../../actions/index'
import {getMenuItems} from '../../actions/index'
import {updateMenuItem} from '../../actions/index'
import {hashHistory} from 'react-router'
import {resetMenuItems} from '../../actions/index'
import './edit-menu-item.scss'

class editMenuItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            ingredients: '',
            price: '',
            notes: '',
            photo_url: '',
            menu_items: ''

        }
    }

    menuItemsAndView() {
        this.props.getMenuItems(this.props.menu_items.menu_id).then(() => {
            this.props.resetMenuItems()
            // hashHistory.push('/editMenu')
        })
    }

    menuItemDetails() {
        this.setState({menu_items: Object.assign({}, this.props.menu_items)})
    }

    saveChanges() {
        let a;
        let id;

        if (this.props.menu_items.id) {
            a = this.props.menu_items.id;
            id = a;
        }

        let obj = {
            name: this.state.name,
            description: this.state.description,
            ingredients: this.state.ingredients,
            price: this.state.price,
            notes: this.state.notes,
            photo_url: this.state.photo_url
        }
        let newObj = this.isEmptyFilter(obj)
        let verifyEmpty = this.newObjIsNotEmpty(newObj)
        if (!!verifyEmpty) {
            verifyEmpty.id = this.props.menu_items.id
            // verifyEmpty.price = (verifyEmpty.price * 100)
            if (!verifyEmpty.id) {
                alert('there is not item to update! Please go back and select a Menu Item!');
            } else {
              console.log(verifyEmpty);
                // this.props.updateMenuItem(obj)
                // alert('Your Product Has Been Successfully Updated')

            }
        }

    }

    isEmptyFilter(obj) {
        for (let k in obj) {
            if (!obj[k]) {
                delete obj[k];
            }
            else {

            }
        }
        return obj;
    }

    newObjIsNotEmpty(newObj) {
        for (let prop in newObj) {
            if (newObj.hasOwnProperty(prop))
            return newObj
        }
        alert('Please Fill Out Atleast One Of The Following Fields')
        return false
    }


    render() {
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

        const menu_item = this.state.menu_items;
        return (
            <div className='edit-container'>
                <h1>menuItemEdit</h1>
                <button onClick={this.menuItemDetails.bind(this)}>Click for details</button>
                <Link to='/editMenu'>
                    <button>Edit Menu</button>
                </Link>

                <form className="form-horizontal" role="form">
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Name:</label>
                        <div className="col-lg-8">
                            <input value={menu_item.name} placeholder={this.props.menu_items.name} onChange={(e) => {
                                this.setState({name: e.target.value})
                            }} className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Description:</label>
                        <div className="col-lg-8">
                            <input value={menu_item.description} placeholder={this.props.menu_items.description} onChange={(e) => {
                                this.setState({description: e.target.value})
                            }} className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Ingredients:</label>
                        <div className="col-lg-8">
                            <input value={menu_item.ingredients} placeholder={this.props.menu_items.ingredients} onChange={(e) => {
                                this.setState({ingredients: e.target.value})
                            }} className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Price:</label>
                        <div className="col-lg-8">
                            <input placeholder={this.props.menu_items.price / 100} onChange={(e) => {
                                this.setState({price: e.target.value * 100})
                            }} className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Notes:</label>
                        <div className="col-lg-8">
                            <input value={menu_item.notes} placeholder={this.props.menu_items.notes} onChange={(e) => {
                                this.setState({notes: e.target.value})
                            }} className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Photo_Url:</label>
                        <div className="col-lg-8">
                            <input value={menu_item.photo_url} placeholder={this.props.menu_items.photo_url} onChange={(e) => {
                                this.setState({photo_url: e.target.value})
                            }} className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <input type="button" onClick={() => this.saveChanges()} className="btn btn-primary" value="Save Changes"/>

                        <input type="reset" onClick={() => {
                            this.menuItemsAndView()
                        }} className="btn btn-default" value="Cancel"/>

                    </div>
                </form>

                <div style={sectionStyle}></div>

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
        resetMenuItems: resetMenuItems
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(editMenuItem)
