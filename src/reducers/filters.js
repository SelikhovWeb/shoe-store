import {
  ADD_BRAND_FILTER,
  REMOVE_BRAND_FILTER,
  ADD_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER,
  ADD_GENDER_FILTER,
  REMOVE_GENDER_FILTER,
  ADD_SALE_FILTER,
  REMOVE_SALE_FILTER
} from "../actions/constants";

const initialState = {
  brandFilters: [],
  categoryFilters: [],
  genderFilters: [],
  saleFilters: false,
  sort: "",
  amount: 0,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BRAND_FILTER:
      return {
        ...state,
        brandFilters: action.payload.brandFilters,
        amount: state.amount + 1,
      };
    case REMOVE_BRAND_FILTER:
      return {
        ...state,
        brandFilters: action.payload.brandFilters,
        amount: state.amount - 1,
      };
    case ADD_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilters: action.payload.categoryFilters,
        amount: state.amount + 1,
      };
    case REMOVE_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilters: action.payload.categoryFilters,
        amount: state.amount - 1,
      };
      case ADD_GENDER_FILTER:
      return {
        ...state,
        genderFilters: action.payload.genderFilters,
        amount: state.amount + 1,
      };
    case REMOVE_GENDER_FILTER:
      return {
        ...state,
        genderFilters: action.payload.genderFilters,
        amount: state.amount - 1,
      };
      case ADD_SALE_FILTER:
      return {
        ...state,
        saleFilters: true,
        amount: state.amount + 1,

      };
    case REMOVE_SALE_FILTER:
      return {
        ...state,
        saleFilters: false,
        amount: state.amount - 1,

      };
    default:
      return state;
  }
};

export default filtersReducer;
