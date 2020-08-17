import axios from 'axios'

/**
 * Allow api operations
 *
 * @private
 */
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const addData = payload => api.post(`/add`, payload)
export const getData = () => api.get(`/data`)

const apis = {
    addData,
    getData,
}

export default apis