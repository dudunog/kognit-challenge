import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

httpClient.interceptors.response.use(
  (response: any) => response,
  async (error: any) => Promise.reject((error?.response && error?.response?.data) || 'Algo deu errado')
)

export default httpClient
