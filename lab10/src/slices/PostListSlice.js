// 목적: reducer를 defalut로 export.

import { createSlice } from "@reduxjs/toolkit";

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
    name: 'postList',
    initialState,
    reducers: {
        getPostsStart: (state, action) => { },
        getPostsSuccess: (state, action) => { },
        getPostsFailure: (state, action) => { },
    },
});

// action creator들을 다른 모듈에서 사용할 수 있도록 export:
export const { getPostsStart, getPostsSuccess, getPostsFailure } = postListSlice.actions;

// reducer를 다른 모듈에서 사용할 수 있도록 export:
export default postListSlice.reducer;