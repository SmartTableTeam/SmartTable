import React , {Component} from 'react'
import './edit-menu-category.scss'
export default class Category extends Component {
  constructor(props){
    super(props)
console.log('setting initial state');
    this.state = {
      newCategory:'',
      categoryArray:[]
    }
  }

  onChange(e) {
    e.preventDefault()
    console.log(e.target.value);
    this.setState({newCategory:e.target.value})
  }
  onSubmit(e){
  e.preventDefault()
  console.log(this.state.newCategory);
    console.log(this.state.categoryArray);
    let newArray = this.state.categoryArray.slice()
    console.log(newArray);
    newArray.push(this.state.newCategory)
    console.log(newArray);
    this.setState({categoryArray:newArray})
    console.log(this.state.categoryArray);
    this.setState({newCategory:''})
    console.log(this.state.newCategory);
  }


  render() {
    console.log(this.state.categoryArray);
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
        <div></div>

      </div>
    )
  }
}
