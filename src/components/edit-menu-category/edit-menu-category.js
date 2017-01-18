import React , {Component} from 'react'
import './edit-menu-category.scss'
import { connect } from 'react-redux'
import { addCategory } from '../../redux/categories'
// import { bindActionCreators } from 'redux'
import store from '../../store'

import CurrentCategories from '../edit-menu-current-categories/current-categories'


class Category extends Component {
  constructor(props){
    super(props)
console.log('setting initial state');
    this.state = {
      newCategory:'',
      categoryArray:[]
    }
    this.handleCategory = this.handleCategory.bind(this)
  }
  onChange(e) {
    e.preventDefault()
    // console.log(e.target.value);
    this.setState({newCategory:e.target.value})
  }
  onSubmit(e){
  e.preventDefault()
  console.log(this.state.newCategory);
    console.log(this.state.categoryArray);
    let newArray = this.state.categoryArray.slice()
    console.log(newArray);
    newArray.push({name:this.state.newCategory})
    console.log(newArray);

    this.setState({categoryArray:newArray})
    this.handleCategory()
    console.log(this.state.categoryArray);
    this.setState({newCategory:''})
    console.log(this.state.newCategory);


  }

  handleCategory(){
    console.log(store)
    console.log('firing');
      store.dispatch({
        type:'ADD_CATEGORY',
        payload:this.state.newCategory
      })
  }

  render() {
    console.log(this.props);
    console.log(this.state.categoryArray);
    console.log(this.props.categories);
    console.log(CurrentCategories);
    console.log(this.state.categoryArray);
    console.log(addCategory);

    const categories = this.props.categories.map((category,i) => {
      console.log(category);
      return (
        <li
          key={i}
          className=''
          onClick={() => {
            console.log(category);
            // store.dispatch({
            // type:'CATEGORY_SELECTED',
            // payload:category
          // })
          }}
          >{category.name}</li>
      )
    })

    return (

      <div id='category-container'>
        <div className='container-fluid'>

          <div className='button-container'>
          <button className='btn btn-default btn-lg'>Add Category</button>
          <button className='btn btn-default btn-md'>Back</button>
          </div>

          <form onSubmit={this.onSubmit.bind(this)}>
          <input ref='val' value={this.state.newCategory} onChange={this.onChange.bind(this)} type='text' className='form-control'/>
          </form>

        </div>
            <h4>{categories}</h4>

      </div>

    )
  }
}





// export default connect(null,mapDispatchToProps)(Category)

function mapStateToProps(state) {
  console.log(state);
  console.log('State change detected!');
  return {
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(Category)

// <h4>{this.state.categoryArray.map(category => {
//   return (
//     <CurrentCategories
//       name={this.category.name}
//       key={this.category.name}
//       />
//   )
// })}</h4>
