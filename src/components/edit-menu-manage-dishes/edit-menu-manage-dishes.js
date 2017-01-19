import React , { Component } from 'react'
import '../edit-menu-category/edit-menu-category.scss'
import { connect } from 'react-redux'
import store from '../../store'
import { addCategory } from '../../redux/categories'
import { addDish } from '../../redux/categories'
import { categorySelected } from '../../redux/categories'
import { bindActionCreators } from 'redux'




class ManageDishes extends Component {
  constructor(props){
    super(props)

    this.state = {
      description:'',
      ingredients:'',
      price:null,
      newItems:false
    }

  }


  handleDesc(e) {
    console.log(e.target.value);
    this.setState({description:e.target.value})
  }

  handleIng(e){
    console.log(e.target.value);
    this.setState({ingredients:e.target.value})
  }

  handlePrice(e){
    console.log(e.target.value);
    this.setState({price:e.target.value})
  }

  handleDish(){
    const newDish = {
      description:this.state.description,
      ingredients:this.state.ingredients,
      price:this.state.price
    }
    console.log(store)
    console.log('firing');
      store.dispatch({
        type:'ADD_DISH',
        payload:newDish
      })

  }

  removeItem(item){
    console.log(item);
    store.dispatch({
      type:'REMOVE_DISH',
      payload:item
    })

  }

  render(){

      console.log(this.nextProps);
      console.log(this.props.category.items);
      let items;
      if(this.props.category.items){
        items = this.props.category.items.map((item, i) => {
          console.log(item);
          console.log(i);
          return (
            <li
              key={i}>{item.desc} - {item.ingredients} - {item.price}     -----     <span onClick={this.removeItem.bind(this,item.desc)}>X</span></li>
          )
        })
      }

      console.log(this.props.category);
    console.log(this.props.category.name);
    console.log(this.props.category.items);
    let newItem;
    // newItem = this.props.category.map( (item,index) => {

    // })

    return (

      <div className='ManageDishes-container'>
        <div className='button-container'>
          <button className='btn btn-default btn-lg'>Add Dish</button>
        </div>

          <div
            className='dish-item-container'>{this.props.category.items ? items : <div>Nothing to render</div>}
          </div>
          <form
            onSubmit={this.handleDish.bind(this)}
            id='add-dish-container'
            className='form-group'>
            Description:
            <input className='form-control'
              onChange={this.handleDesc.bind(this)} />
            Ingredients:
            <input className='form-control'
              onChange={this.handleIng.bind(this)} />
            Price:
            <input className='form-control'
              onChange={this.handlePrice.bind(this)} />

            <button className='btn btn-default'>Save</button>
            <button className='btn btn-default'>Delete</button>
          </form>
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  console.log('State change detected!');
  console.log(state.categories);
  return {
    category: state.categories.category
  }
}

// anything returned from this function will end up as props in the manageDishes container
// function mapDispatchToProps(dispatch) {
//   // whenever selectBook is called the result should be passed  to all of our reducers
//   return bindActionCreators({
//     categorySelected:categorySelected,
//     addDish:addDish,
//     addCategory:addCategory
//   }, dispatch)
// }
export default connect(mapStateToProps)(ManageDishes)
