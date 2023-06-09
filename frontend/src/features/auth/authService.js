import axios from 'axios'

const API_URL = 'http://localhost:8000/api/users/'

// Register user 
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login
const login = async(userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login
const update = async(userData, id) => {
    const response = await axios.put(API_URL + `me/${id}`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// logout
const logout = () => {
    localStorage.removeItem('user')
}


const authService = { register, login, update, logout }

export default authService