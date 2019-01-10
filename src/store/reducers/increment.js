import {INCREMENT} from '../actions/actionTypes'

const initialState = {
  num: 0
};

const increment = (state=initialState, action) => {
    switch(action.type) {
      case INCREMENT:
      return{
        ...state,
        num: action.value
      }
      default: 
        return state;
    }
};

export default increment;