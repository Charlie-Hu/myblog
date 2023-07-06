
    const initialState = {
        isLoginModalOpen: false,
        isRegisterModalOpen: false,
        isHeaderExpanded: false,
        username:'',
    };

    const headerReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'EXPAND_HEADER':
                return {
                    ...state,
                    isHeaderExpanded: true,
                };
            case 'COLLAPSE_HEADER':
                return {
                    ...state,
                    isHeaderExpanded: false,
                };
            case 'OPEN_LOGIN_MODAL':
                return {
                    ...state,
                    isLoginModalOpen: true,
                };
            case 'CLOSE_LOGIN_MODAL':
                return {
                    ...state,
                    isLoginModalOpen: false,
                };
            case 'OPEN_REGISTER_MODAL':
                return {
                    ...state,
                    isRegisterModalOpen: true,
                };
            case 'CLOSE_REGISTER_MODAL':
                return {
                    ...state,
                    isRegisterModalOpen: false,
                };
            default:
                return state;
        }
    };

    export default headerReducer;
