

const initialState = {
  category: {},
  categories: [
    {
      name:'Appetizers',
      items: [
        {
          desc:"French Fries",
          ingredients:"Potateos, Salt, Oil",
          price: 3.50
        }
      ]
    },
    {
      name:'Wine List',
      items: [
        {
          desc:'French Wine',
          ingredients:"",
          price:9.00
        }
      ]
    },
    {
      name:'Main Course',
      items: [
        {
          desc:'Beef Brisket BBQ',
          ingredients:"Brisket, Salt, Pepper, Rosemary, Red Wine",
          price:9.50
        },
        {
          desc:'Seafood Salad',
          ingredients:"Imitation Crab, Tuna, Shrimp, Tartar Sauce, Lemon Zest",
          price:6.50
        },
        {
          desc:'Vegetarian Burger',
          ingredients:"Tofu, Squash. Broccoli",
          price:4.50
        }
      ]
    }
  ]
}


export default function reducer(state=initialState, action) {
  console.log(action);
  console.log(state);
  console.log(action.payload)
  switch (action.type) {
    case 'ADD_CATEGORY':
    console.log(action);
    console.log(state);
    console.log(action.payload)
      const newCategory = {
        name: action.payload,
        items: [
          // {
          //   desc:'',
          //   ingredients:"",
          //   price:null
          // }
        ]
      }
      console.log(newCategory);
      console.log(Object.assign({}, state, {categories: [...state.categories, newCategory]}));
      return Object.assign({}, state, {categories: [...state.categories, newCategory]})

      // =====================category selected action =======================

    case 'CATEGORY_SELECTED':
    console.log(action);
    console.log(state);
    console.log(action.payload)
    // console.log();
    console.log({
      name:action.payload.name,
      items:action.payload.items
    });
    console.log(Object.assign({},{
      name:action.payload.name,
      items:action.payload.items
    }));
    return Object.assign({},state,{category: {name:action.payload.name,items:action.payload.items}})

        // =====================add dish to category ============================
    case 'ADD_DISH':
    console.log(action);
    console.log(state);
    console.log(action.payload)
    var currentName;
    currentName = state.category.name
    console.log(currentName);

    const newDish = {
      desc:action.payload.description,
      ingredients:action.payload.ingredients,
      price:action.payload.price
    }

    console.log({
      categories:state.categories,
      category: {
        name:state.category.name,
        items:[...state.category.items, newDish]
      }
    });
    return {
      categories:state.categories,
      category: {
        name:state.category.name,
        items:[...state.category.items, newDish]
      }
    }

    case 'REMOVE_DISH':
    console.log(action);
    console.log(state);
    console.log(action.payload)

    console.log({
      categories:state.categories,
      category: {
        name:state.category.name,
        items:state.category.items.filter(item => item.desc !== action.payload)
      }
    });
    return {
      categories:state.categories,
      category: {
        name:state.category.name,
        items:state.category.items.filter(item => item.desc !== action.payload)
      }
    }

  }


    return state;

}


export function addCategory(name){
  console.log(name);
  return {
    type:'ADD_CATEGORY',
    payload:name
  }
}

export function categorySelected(category){
  console.log(category);
  return {
    type:'CATEGORY_SELECTED',
    payload:category
  }
}

export function addDish(dish){
  console.log(dish);
  return {
    type:'ADD_DISH',
    payload:dish
  }
}
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
