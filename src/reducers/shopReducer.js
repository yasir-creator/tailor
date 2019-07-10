import { GET_SHOP_PRODUCTS } from "../actions/types";
import isEmpty from "../validations/is-empty";

const intialState = {
  isAuthenticated: false,
  userproduct: {}
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_SHOP_PRODUCTS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userproduct: action.payload
      };
    default:
      return state;
  }
}
