// Import createAsyncThunk and createSlice here.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create loadCommentsForArticleId here.
export const loadCommentsForArticleId = createAsyncThunk(
  "comments/loadComments",
  async (id) => {
    const response = await fetch(`api/articles/${id}/comments`);
    const json = await response.json();
    return json;
  }
);

// Create postCommentForArticleId here.
export const postCommentForArticleId = createAsyncThunk(
  "comments/postComment",
  async ({ articleId, comment }) => {
    const requestBody = JSON.stringify({ comment })
    const response = await fetch(
      `api/articles/${articleId}/comments`,
      {
        method: "POST",
        body: requestBody
      })
    const json = await response.json()
    return json
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    // Add initial state properties here.
    byArticleId: {},
    isLoadingComments: false,
    failedToLoadComments: false,
  },
  // Add extraReducers here.
  extraReducers: {
    [loadCommentsForArticleId.pending]: (state, action) => {
      isLoadingComments = true;
      failedToLoadComments = false;
    },
    [loadCommentsForArticleId.fulfilled]: (state, action) => {
      state.byArticleId = {
        [action.payload.articleId]: action.payload.comments,
      };
      isLoadingComments = false;
      failedToLoadComments = false;
    },
    [loadCommentsForArticleId.rejected]: (state, action) => {
      isLoadingComments = false;
      failedToLoadComments = true;
    },
    [postCommentForArticleId.pending]: (state, action) => {
      createCommentIsPending = true;
      failedToCreateComment = false;
    },
    [postCommentForArticleId.fulfilled]: (state, action) => {
      const articleId = action.payload.articleId;
      state.byArticleId[articleId].push(action.payload);
      createCommentIsPending = false;
      failedToCreateComment = false;
    },
    [postCommentForArticleId.rejected]: (state, action) => {
      createCommentIsPending = false;
      failedToCreateComment = true;
    },
  },
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) =>
  state.comments.createCommentIsPending;

export default commentsSlice.reducer;
