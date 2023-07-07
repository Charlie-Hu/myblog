import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import commentReducer from "./commentReducer";

// 创建 Redux store
const store = configureStore({
  reducer: {
    header: headerReducer,
    register: registerReducer,
    login: loginReducer,
    comment: commentReducer,
  },
});

export default store;