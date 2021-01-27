import {SET_COST, SET_FIELD} from './actionTypes';

const initialState = {
  house_info: {
    bedroom: '',
    bathroom: '',
    sqft_living: '',
    sqft_lot: '',
    waterfront: '',
    yr_built: '',
    view: '',
  },
  price: ''
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_FIELD) {
    return {...house_info,{[action.payload.field : action.payload.value}}
  }
  return state;
};

export default rootReducer;
