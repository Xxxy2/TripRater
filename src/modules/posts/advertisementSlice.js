import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getPostsThunk } from './thunks'

const advertisementAdapter = createEntityAdapter()
const initialState = advertisementAdapter.getInitialState()
const advertisementSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsThunk.pending]: () => {
      // state.loading = true
    },
    [getPostsThunk.fulfilled]: (state, { payload }) => {
      // state.loading = false
      advertisementAdapter.addMany(state, payload.data)
    },
    [getPostsThunk.rejected]: () => {
      // state.loading = false
    },
  },
})

export const { action } = advertisementSlice

export default advertisementSlice
