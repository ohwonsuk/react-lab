// 포스트 상세보기에 필요한 reducer를 export:

import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// state 초깃값:
const initialState = {
    post: {},
    loading: false,
    hasError: false,
};

// slice 객체 생성:
const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState,
    reducers: {
        getPostDetailStart: (state, action) => {
            state.loading = true;
        },
        getPostDetailsSuccess: (state, action) => {
            state.loading = false;
            state.hasError = false;
            state.post = action.payload;
        },
        getPostDetailsFailure: (state, action) => {
            state.loading = false;
            state.hasError = true;
        },
    },
});

// 생성된 slice객체가 속성으로 가지고 있는 action creator들을 export
const { getPostDetailStart, getPostDetailsSuccess, getPostDetailsFailure } = postDetailsSlice.actions;

// 생성된 slice 객체가 속성으로 가지고 있는 reducer를 export
export default postDetailsSlice.reducer;

// 포스트 아이디로 포스트 1개를 fetch해서 action 객체를 리턴하는 함수:
export const fetchPostDetails = (id) => {
    return async (dispatch) => {
        dispatch(getPostDetailStart());

        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            let post = response.data;

            response = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            post.username = response.data.username;
            post.email = response.data.email;

            dispatch(getPostDetailsSuccess(post));

        } catch (error) {
            dispatch(getPostDetailsFailure());
        }
    };
};