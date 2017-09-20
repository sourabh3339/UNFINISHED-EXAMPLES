import {createStore} from "redux";

//import cartReducer from "./cart/Reducer";

//store manages the reducer internally
//store shall call reducer with state values
//store shall keep teh values returned
// from reducer



// a "reducer" that handle some events and return a state

const initial_state = {
    fields:{}
}
function counter(state = initial_state, action) {
    switch(action.type){
        case 'gen_update':
        state.fields[action.field_data.field_name] = action.field_data.field_name;
        break;
        
    }
    return state;
  }


let store = createStore(counter);
/*store.subscribe(() =>
 console.log(store.getState())
)*/



export default store;