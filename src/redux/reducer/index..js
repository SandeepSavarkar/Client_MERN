const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, data: action.payload };
    case "DATA_ERROR":
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default rootReducer;
