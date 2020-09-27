import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  COUNT_TOTAL_CART,
} from "../actions/constants";

const initialState = { products: [], total: 0 };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload.info],
        total: action.payload.total,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (el) => el.name !== action.payload.deleteName
        ),
        total: state.total - action.payload.price,
      };
    case COUNT_TOTAL_CART:
      return {
        ...state,
        total: action.payload.total,
      };
    default:
      return state;
  }
};

export default cartReducer;
