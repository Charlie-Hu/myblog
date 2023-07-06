const initialState = {
    login: false,
    error: '',
    username: '',
    isErrorShow: false,
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
                isErrorShow: true,
            };
        case'ERROR RESET':
            return {
                ...state,
                isErrorShow: false,
            }
        case'LOGOUT':
            sessionStorage.clear()
            return {
                ...state,
                username: sessionStorage.key(0),
                login: false,
            }
        default:
            return state;
    }
};

export default registerReducer;