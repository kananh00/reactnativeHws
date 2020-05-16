// ACTION TYPES
const ADD_LIST = "ADD_LIST";
// const ADD_PROJECT = "ADD_PROJECT";
// const ADD_TODO = "ADD_TODO";
// const UPDATE_TODO = "UPDATE_TODO";
// const DELETE_TODO = "DELETE_TODO";
const TOGGLE_PRODUCT = "TOGGLE_PRODUCT";

// SELECTORS
const MODULE_NAME = "data";
export const getLists = (state) => state[MODULE_NAME].lists;
// export const getProducts = (state) => state[MODULE_NAME].products;
// REDUCER

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
                
            
      



    // {
    //   id: createID(),
    //   name: "Second section",
    //   projects: [
    //     {
    //       id: createID(),
    //       name: "Other",
    //       imgUri:
    //         "https://images.unsplash.com/photo-1588707611794-49836ece1f53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    //       todos: [
    //         { id: createID(), text: "Sample text", done: false },
    //         { id: createID(), text: "Sample text", done: false },
    //       ],
    //     },
    //   ],
    // },
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
    // case ADD_PROJECT:
    //   return {
    //     ...state,
    //     lists: state.lists.map((section) => {
    //       if (section.id === payload.sectionID) {
    //         return {
    //           ...section,
    //           projects: [
    //             ...section.projects,
    //             {
    //               id: createID(),
    //               name: payload.name,
    //               imgUri: payload.imgUri,
    //               todos: [],
    //             },
    //           ],
    //         };
    //       }
    //       return section;
    //     }),
    //   };
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
    // case UPDATE_TODO:
    //   return {
    //     ...state,
    //     lists: state.lists.map((section) => {
    //       if (section.id === payload.sectionID) {
    //         return {
    //           ...section,
    //           projects: section.projects.map((project) => {
    //             if (project.id === payload.projectID) {
    //               return {
    //                 ...project,
    //                 todos: project.todos.map((todo) => {
    //                   if (todo.id === payload.todoID) {
    //                     return {
    //                       ...todo,
    //                       text: payload.todoText,
    //                     };
    //                   }
    //                   return todo;
    //                 }),
    //               };
    //             }
    //             return project;
    //           }),
    //         };
    //       }
    //       return section;
    //     }),
    //   };
    // case ADD_TODO:
    //   return {
    //     ...state,
    //     lists: state.lists.map((section) => {
    //       if (section.id === payload.sectionID) {
    //         return {
    //           ...section,
    //           projects: section.projects.map((project) => {
    //             if (project.id === payload.projectID) {
    //               return {
    //                 ...project,
    //                 todos: [
    //                   {
    //                     id: createID(),
    //                     text: payload.todoText,
    //                     done: false,
    //                   },
    //                   ...project.todos,
    //                 ],
    //               };
    //             }
    //             return project;
    //           }),
    //         };
    //       }
    //       return section;
    //     }),
    //   };
    // case DELETE_TODO:
    //   return {
    //     ...state,
    //     lists: state.lists.map((section) => {
    //       if (section.id === payload.sectionID) {
    //         return {
    //           ...section,
    //           projects: section.projects.map((project) => {
    //             if (project.id === payload.projectID) {
    //               return {
    //                 ...project,
    //                 todos: project.todos.filter(
    //                   (todo) => todo.id !== payload.todoID
    //                 ),
    //               };
    //             }
    //             return project;
    //           }),
    //         };
    //       }
    //       return section;
    //     }),
    //   };
    default:
      return state;
  }
}

// ACTION CREATORS

export const addList = (payload) => ({
  type: ADD_LIST,
  payload,
});
// export const addProject = (payload) => ({
//   type: ADD_PROJECT,
//   payload,
// });
// export const addTodo = (payload) => ({
//   type: ADD_TODO,
//   payload,
// });
// export const deleteTodo = (payload) => ({
//   type: DELETE_TODO,
//   payload,
// });
// export const updateTodo = (payload) => ({
//   type: UPDATE_TODO,
//   payload,
// });
export const toggleProduct= (payload) => ({
  type: TOGGLE_PRODUCT,
  payload,
});

function createID() {
  return `${Date.now()}${Math.random()}`;
}
