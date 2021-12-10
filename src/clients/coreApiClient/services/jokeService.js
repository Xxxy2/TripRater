import axios from 'axios'

const baseurl = 'https://jsonplaceholder.typicode.com/posts/'
class JokesService {
  fetchJokeById = (id) => axios.get(`${baseurl}${id}`)

  fetchPosts = () => axios.get(baseurl)
}

const jokesService = new JokesService()

export default jokesService
