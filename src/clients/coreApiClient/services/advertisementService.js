import axios from 'axios'

const baseurl = 'https://jsonplaceholder.typicode.com/photos/'
class AdvertisementsService {
  fetchPostById = (id) => axios.get(`${baseurl}${id}`)

  fetchPosts = () => axios.get(baseurl)
}

const advertisementsService = new AdvertisementsService()

export default advertisementsService
