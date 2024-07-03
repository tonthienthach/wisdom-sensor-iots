import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api/accounts'
async function login(credentials) {
    try {
        const response = await axios.post(`${BASE_URL}/login`, credentials)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
async function register(credentials) {
    try {
        const response = await axios.post(`${BASE_URL}/register`, credentials)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
async function forgotPassword() {
    try {
        const response = await axios.post(`${BASE_URL}/forgot-password`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
export { login, register }
