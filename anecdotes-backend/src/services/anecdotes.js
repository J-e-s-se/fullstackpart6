import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const list = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (data) => {
  const response = await axios.post(baseUrl, data)
  return response.data
}

const update = async (data) => {
  const response = await axios.put(`${baseUrl}/${data.id}`, data)
  return response.data
}

const anecdotesServices = {
  list,
  create,
  update
}

export default anecdotesServices