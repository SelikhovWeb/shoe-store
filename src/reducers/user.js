const initialState = { name: "", email: "", tel: "", isAuth: false}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return (state = action.payload);
    case "LOGE_OUT":
      return state;
    default:
      return state;
  }
};

export default userReducer;
