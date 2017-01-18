import {combineReducers, createStore} from 'redux'

import categories from './redux/categories';

const reducer = combineReducers({
  categories:categories

})

export default createStore(reducer)
