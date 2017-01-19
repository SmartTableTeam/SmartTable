import {combineReducers, createStore} from 'redux'
// import category from './redux/categories';
import categories from './redux/categories';

const reducer = combineReducers({
  categories:categories
})

export default createStore(reducer)
