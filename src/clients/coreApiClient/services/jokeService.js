import axios from 'axios'

const baseurl = 'https://jsonplaceholder.typicode.com/photos/'
class PostsService {
  fetchPostById = (id) => axios.get(`${baseurl}${id}`)

  fetchPosts = () => axios.get(baseurl)
}

const jokesService = new PostsService()

export default jokesService
