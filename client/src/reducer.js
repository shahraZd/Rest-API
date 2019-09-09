import {GET_CONTACTS} from "./actionTypes"

const initialState = {
  contact: [],

};


export const Reducer=(state = initialState, action)=> {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contact: action.payload
      };
    default:
      return state;
  }
}


export default Reducer