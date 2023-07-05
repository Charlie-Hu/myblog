const initialState = {
    login: false,
    error: '',
    username: '',
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                login: action.payload,
            };
        case 'LOGIN_SUCCESS_USER':
            return {
                ...state,
               username: action.payload,
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default registerReducer;