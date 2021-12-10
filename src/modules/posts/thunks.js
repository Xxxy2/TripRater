import { createAsyncThunk } from '@reduxjs/toolkit'
import jokesService from 'clients/coreApiClient/services/jokeService'
/* eslint-disable import/prefer-default-export */
export const getPostsThunk = createAsyncThunk('posts/getPosts', async () => {
  const result = await jokesService.fetchPosts()
  return result
})
