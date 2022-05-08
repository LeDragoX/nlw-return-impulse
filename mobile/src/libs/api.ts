import axios from 'axios'

export const api = axios.create({
  baseURL: '172.27.226.75:3333' // Your IP Address or API Endpoint
})