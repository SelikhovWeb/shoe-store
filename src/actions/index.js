import {
  REMOVE_FROM_CART,
  COUNT_TOTAL_CART,
  ADD_BRAND_FILTER,
  REMOVE_BRAND_FILTER,
  ADD_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER,
  ADD_GENDER_FILTER,
  REMOVE_GENDER_FILTER,
  ADD_SALE_FILTER,
  REMOVE_SALE_FILTER,
} from "./constants";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const logIn = ({ name, email, tel }) => {
  return {
    type: "LOG_IN",
    payload: {
      name,
      email,
      tel,
      isAuth: true,
    },
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
export const addToCart = (photo, name, price, quantity, total) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      info: {
        photo,
        name,
        price,
        quantity,
      },
      total: total,
    },
  };
};
export const removeFromCart = (deleteName, price) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      deleteName,
      price,
    },
  };
};
export const countTotalCart = (price) => {
  return {
    type: COUNT_TOTAL_CART,
    payload: {
      price,
    },
  };
};

export const addBrandFilter = (brandFilters) => {
  return {
    type: ADD_BRAND_FILTER,
    payload: {
      brandFilters,
    },
  };
};

export const removeBrandFilter = (brandFilters) => {
  return {
    type: REMOVE_BRAND_FILTER,
    payload: {
      brandFilters,
    },
  };
};
export const addCategoryFilter = (categoryFilters) => {
  return {
    type: ADD_CATEGORY_FILTER,
    payload: {
      categoryFilters,
    },
  };
};

export const removeCategoryFilter = (categoryFilters) => {
  return {
    type: REMOVE_CATEGORY_FILTER,
    payload: {
      categoryFilters,
    },
  };
};
export const addGenderFilter = (genderFilters) => {
  return {
    type: ADD_GENDER_FILTER,
    payload: {
      genderFilters,
    },
  };
};

export const removeGenderFilter = (genderFilters) => {
  return {
    type: REMOVE_GENDER_FILTER,
    payload: {
      genderFilters,
    },
  };
};
export const addSaleFilter = () => {
  return {
    type: ADD_SALE_FILTER,
  };
};

export const removeSaleFilter = () => {
  return {
    type: REMOVE_SALE_FILTER,
  };
};
