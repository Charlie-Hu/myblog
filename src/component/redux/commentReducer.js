const initialState = {
    comments:[],
    page:1,
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE COMMENTS':
            return {
                ...state,
                comments: action.comments,
            };
        case 'PAGE CHANGED':
            return {
                ...state,
                page:action.currentPage,
            };
        default:
            return state;
    }
};

export default commentReducer;