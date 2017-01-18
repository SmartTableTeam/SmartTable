

const initialState = {
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

    // case 'CATEGORY_SELECTED':
    // console.log(action);
    // console.log(state);
    // console.log(action.payload)
    //   const newCategoryItems = {
            
    //   }
  };

    return state;

}


export function addCategory(name){
  console.log(name);
  return {
    type:'ADD_CATEGORY',
    payload:name
  }
}
