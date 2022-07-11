import { SET_USER, CLEAR_USER } from './constants';

const initialState = {
  user: null,
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default AuthReducer;
