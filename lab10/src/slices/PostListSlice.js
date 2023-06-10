// 목적: reducer를 defalut로 export.

import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// state 초깃값:
const initialState = {
    posts: [],
    loading: false,
    hasError: false,
};

// RTK에서는 slice 객체를 생성하면, action creator, reducer를 자동으로 만들어 줌.
// slice 객체가 action creator와 reducer를 속성으로 갖게 됨.
// slice 생성:
const postListSlice = createSlice({
    name: 'postList', // slice를 구분하기 위한 이름정의
    initialState,
    reducers: {
        getPostsStart: (state, action) => {
            state.loading = true;
        },
        getPostsSuccess: (state, action) => {
            state.loading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        getPostsFailure: (state, action) => {
            state.loading = false;
            state.hasError = true;
        },
    },
});

// action creator들을 다른 모듈에서 사용할 수 있도록 export:
export const { getPostsStart, getPostsSuccess, getPostsFailure } = postListSlice.actions;

// reducer를 다른 모듈에서 사용할 수 있도록 export:
export default postListSlice.reducer;

// Thunk 미들웨어에서 호출할 dispatch 함수를 리턴.
export const fetchPostsList = () => {
    return async (dispatch) => {
        dispatch(getPostsStart()); // 포스트 목록 가져오기 시작.

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

            dispatch(getPostsSuccess(response.data)); // 포스트 목록 가져오기 성공.
        } catch (error) {
            dispatch(getPostsFailure());  // 포스트 목록 가져오기 실패 응답 처리.
        }
    };
};