import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  }
})
/*export const AXIOS = axios.create({
  baseURL: '/api'
})*/
