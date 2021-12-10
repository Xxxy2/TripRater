import { useDispatch, useSelector } from 'react-redux'
import { getPostsThunk } from './thunks'
import { selectPosts } from './selectors'

const useJokes = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const getJokes = () => {
    dispatch(getPostsThunk())
  }
  return { posts, actions: { getJokes } }
}

export default useJokes
