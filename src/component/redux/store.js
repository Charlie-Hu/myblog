import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

// 创建 Redux store
const store = configureStore({
  reducer: {
    header: headerReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;