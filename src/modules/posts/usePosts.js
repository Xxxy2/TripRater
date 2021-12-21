import { useDispatch, useSelector } from 'react-redux'
import { getPostsThunk } from './thunks'
import { selectPosts } from './selectors'

const usePosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const getPosts = () => {
    dispatch(getPostsThunk())
  }
  const getPostById = (currentId) => posts.find(({ id }) => id === currentId)

  return { posts, actions: { getPosts, getPostById } }
}
// todo funkcja zwracajaca posta o danym ID
export default usePosts
