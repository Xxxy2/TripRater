import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getPostsThunk } from './thunks'

const jokeAdapter = createEntityAdapter()
const initialState = jokeAdapter.getInitialState()
const jokeSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsThunk.pending]: () => {
      // state.loading = true
    },
    [getPostsThunk.fulfilled]: (state, { payload }) => {
      // state.loading = false
      jokeAdapter.addMany(state, payload.data)
    },
    [getPostsThunk.rejected]: () => {
      // state.loading = false
    },
  },
})

export const { action } = jokeSlice

export default jokeSlice
