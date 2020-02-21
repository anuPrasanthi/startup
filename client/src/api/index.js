import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertStartup = payload => api.post(`/startup`, payload)
export const getAllStartups = () => api.get(`/startups`)


const apis = {
    insertStartup,
    getAllStartups,
    
}

export default apis
