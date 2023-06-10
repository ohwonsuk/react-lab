import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import postListReduer from './slices/PostListSlice';

// RTK(Redux Toolkit)리덕스 스토어 객체 생성
const store = configureStore({
  reducer: {
    postList: postListReduer,
  }, // TODO 필요한 리듀서 객체를 추가함
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

