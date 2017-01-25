import {
    GET_MENU
} from '../actions/index'
import {
    POST_MENU
} from '../actions/index'
import {
    DELETE_MENU
} from '../actions/index'
import {
    MENU_SELECTED
} from '../actions/index'
export default function(state = [], action) {
    switch (action.type) {
        case GET_MENU:
            return action.payload.data;

        case POST_MENU:
            return [...state, action.payload.data]


        case DELETE_MENU:
            // return [...state].filter(state => state.id !== action.payload.id)
            return ['....loading']

        case MENU_SELECTED:
            return [...state].filter(obj => obj.id === action.payload)
    }
    return state;
}


// export function addCategory(name){
//   console.log(name);
//   return {
//     type:'ADD_CATEGORY',
//     payload:name
//   }
// }
//
// export function categorySelected(category){
//   console.log(category);
//   return {
//     type:'CATEGORY_SELECTED',
//     payload:category
//   }
// }
//
// export function addDish(dish){
//   console.log(dish);
//   return {
//     type:'ADD_DISH',
//     payload:dish
//   }
// }
// ======================================================================
// THIS WAS ALL TO GET ADD DISH TO WORK
// ====================================================================================
// let newItems;
// newItems = [...state.category.items, newDish]

// var stateItems = state;
//
// console.log(stateItems);
//
// // console.log(stateItems.category.items.concat(newDish));
//
// console.log(stateItems);
// ============================================================
// Notes
// ==================================================

// *** object assign with missed target ***
// *** Reassigned state to a variable ***
// *** tried targeting array in a variable and then using Object.assign ***

// ============================================================
// console.log(newItems);
// console.log(newDish);
// console.log(state.category.items.concat(state.category.items));
// console.log(Object.assign({},state,state.category.items.concat(state.category.items)))
// console.log(state.category.items);
//
// console.log();



//
//     // =================================
// case 'ADD_CATEGORY':
//     console.log(action);
//     console.log(state);
//     console.log(action.payload)
//     const newCategory = {
//         name: action.payload,
//         items: [
//             // {
//             //   desc:'',
//             //   ingredients:"",
//             //   price:null
//             // }
//         ]
//     }
//     console.log(newCategory);
//     console.log(Object.assign({}, state, {
//         categories: [...state.categories, newCategory]
//     }));
//     return Object.assign({}, state, {
//         categories: [...state.categories, newCategory]
//     })
//
//     // =====================category selected action =======================
//
// case 'CATEGORY_SELECTED':
//     console.log(action);
//     console.log(state);
//     console.log(action.payload)
//         // console.log();
//     console.log({
//         name: action.payload.name,
//         items: action.payload.items
//     });
//     console.log(Object.assign({}, {
//         name: action.payload.name,
//         items: action.payload.items
//     }));
//     return Object.assign({}, state, {
//         category: {
//             name: action.payload.name,
//             items: action.payload.items
//         }
//     })
//
//     // =====================add dish to category ============================
// case 'ADD_DISH':
//     console.log(action);
//     console.log(state);
//     console.log(action.payload)
//     var currentName;
//     currentName = state.category.name
//     console.log(currentName);
//
//     const newDish = {
//         desc: action.payload.description,
//         ingredients: action.payload.ingredients,
//         price: action.payload.price
//     }
//
//     console.log({
//         categories: state.categories,
//         category: {
//             name: state.category.name,
//             items: [...state.category.items, newDish]
//         }
//     });
//     return {
//         categories: state.categories,
//         category: {
//             name: state.category.name,
//             items: [...state.category.items, newDish]
//         }
//     }
//
// case 'REMOVE_DISH':
//     console.log(action);
//     console.log(state);
//     console.log(action.payload)
//
//     console.log({
//         categories: state.categories,
//         category: {
//             name: state.category.name,
//             items: state.category.items.filter(item => item.desc !== action.payload)
//         }
//     });
//     return {
//         categories: state.categories,
//         category: {
//             name: state.category.name,
//             items: state.category.items.filter(item => item.desc !== action.payload)
//         }
//     }
// case 'CREATE_CATEGORY':
//     console.log(action);
//     console.log(state);
//     console.log(action.payload)
//
