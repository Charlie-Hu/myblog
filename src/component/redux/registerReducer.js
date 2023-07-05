const initialState = {
  errorinfo: '',
  success: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REGISTER_ERROR':
      return {
        ...state,
        errorinfo: action.payload,
      };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;