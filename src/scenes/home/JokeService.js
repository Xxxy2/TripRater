import axios from 'axios'

const baseurl = 'https://jsonplaceholder.typicode.com/posts/'
class JokesService {
  fetchJokeById = (id) => axios.get(`${baseurl}${id}`)

  fetchPosts = () => axios.get(baseurl)
}

const jokesService = new JokesService()

export default jokesService

// const fetchData = async () => {
//  const result = await axios(
//   'https://api.chucknorris.io/jokes/random',
//  );
