import {UPDATE_PROFILE} from "../types";

const initialState = {
  name: 'Michael',
  age: 0,
};


export default (state = initialState, action) => {
  switch(action.type){
    case UPDATE_PROFILE:
      return {
        ...state,
        name: action.data.name,
        age: action.data.age
      };
    default:
      return state;
  }
}
