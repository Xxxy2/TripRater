import { createAsyncThunk } from '@reduxjs/toolkit'
import advertisementsService from 'clients/coreApiClient/services/advertisementService'
/* eslint-disable import/prefer-default-export */
export const getPostsThunk = createAsyncThunk('posts/getPosts', async () => {
  const result = await advertisementsService.fetchPosts()
  return result
})
