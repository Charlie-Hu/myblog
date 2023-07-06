const initialState = {
    errorinfo: '',
    success: false,
    isErrorShow: false,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_REGISTER_ERROR':
            return {
                ...state,
                errorinfo: action.payload,
                isErrorShow: true,
            };
        case 'UPDATE_SUCCESS':
            return {
                ...state,
                success: action.payload,
            };
        case'ERROR RESET':
            return {
                ...state,
                isErrorShow: false,
            }
        default:
            return state;
    }
};

export default registerReducer;