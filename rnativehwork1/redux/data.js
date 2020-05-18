const ADD_LIST = "ADD_LIST";
const TOGGLE_PRODUCT = "TOGGLE_PRODUCT";


const MODULE_NAME = "data";
export const getLists = (state) => state[MODULE_NAME].lists;

const initialState = {
  lists: [
    {
      id: createID(),
      name: "Everything for breakfast",
      status: "regular",
      products: [
        
                      { id: createID(), text: "Pasta", unit: "pkg", count: "2", done: false },
                      { id: createID(), text: "Salt", unit: "pkg", count: "1", done: false },
                      { id: createID(), text: "Tomatoes", unit: "kg", count: "1", done: false },
                      { id: createID(), text: "Cheese", unit: "kg", count: "0,3", done: false },
                   
                ],
      },
      {
        id: createID(),
        name: "Evening with Pasta",
        status: "regular",
        products: [
                    
                        { id: createID(), text: "Pasta", unit: "pkg", count: "2", done: false },
                        { id: createID(), text: "Salt", unit: "pkg", count: "1", done: false },
                        { id: createID(), text: "Tomatoes", unit: "kg", count: "1", done: false },
                        { id: createID(), text: "Cheese", unit: "kg", count: "0,3", done: false },
                     
                  ],
        },
      
        {
          id: createID(),
          name: "Kitchen Repair",
          status: "regular",
          products: [
                      
                          { id: createID(), text: "Pasta", unit: "pkg", count: "2", done: false },
                          { id: createID(), text: "Salt", unit: "pkg", count: "1", done: false },
                          { id: createID(), text: "Tomatoes", unit: "kg", count: "1", done: false },
                          { id: createID(), text: "Cheese", unit: "kg", count: "0,3", done: false },
                       
                    ],
          },
          
          {
            id: createID(),
            name: "Everything for breakfast",
            status: "onetime",
            products: [
                        
                            { id: createID(), text: "Pasta", unit: "pkg", count: "2", done: false },
                            { id: createID(), text: "Salt", unit: "pkg", count: "1", done: false },
                            { id: createID(), text: "Tomatoes", unit: "kg", count: "1", done: false },
                            { id: createID(), text: "Cheese", unit: "kg", count: "0,3", done: false },
                         
                      ],
            },
            {
              id: createID(),
              name: "Evening with Pasta",
              status: "onetime",
              products: [
                          
                              { id: createID(), text: "Pasta", unit: "pkg", count: "2", done: false },
                              { id: createID(), text: "Salt", unit: "pkg", count: "1", done: false },
                              { id: createID(), text: "Tomatoes", unit: "kg", count: "1", done: false },
                              { id: createID(), text: "Cheese", unit: "kg", count: "0,3", done: false },
                           
                        ],
              },
            
              {
                id: createID(),
                name: "Kitchen Repair",
                status: "onetime",
                products: [
                            
                                { id: createID(), text: "Pasta", unit: "pkg", count: "2", done: false },
                                { id: createID(), text: "Salt", unit: "pkg", count: "1", done: false },
                                { id: createID(), text: "Tomatoes", unit: "kg", count: "1", done: false },
                                { id: createID(), text: "Cheese", unit: "kg", count: "0,3", done: false },
                             
                          ],
                },
                
  ],
};

export function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_LIST:
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: createID(),
            name: payload.name,
            status: payload.status,
            products: [],
          },
        ],
      };
   
    case TOGGLE_PRODUCT:
      return {
        ...state,
        lists: state.lists.map((list) => {
          
                if (list.id === payload.listID) {
                  return {
                    ...list,
                    products: list.products.map((product) => {
                      if (product.id === payload.productID) {
                        return {
                          ...product,
                          done: !product.done,
                        };
                      }
                      return product;
              }),
            };
          }
          return list;
        }),
      };
  
    default:
      return state;
  }
}



export const addList = (payload) => ({
  type: ADD_LIST,
  payload,
});

export const toggleProduct= (payload) => ({
  type: TOGGLE_PRODUCT,
  payload,
});

function createID() {
  return `${Date.now()}${Math.random()}`;
}
