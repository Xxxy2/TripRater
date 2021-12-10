import { createSelector } from '@reduxjs/toolkit'
/* eslint-disable import/prefer-default-export */
export const selectPosts = createSelector(
  (state) => state.posts,
  ({ ids, entities }) => ids.map((id) => entities[id]),
)
