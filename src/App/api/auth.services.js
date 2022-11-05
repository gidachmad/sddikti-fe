import axios from 'axios'

const API_URL = 'http://localhost:5000/'

const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password,
  })
}

const login = (username, password) => {
  return axios
    .post(API_URL + 'login', {
      username,
      password,
    })
    .then((response) => {
      console.log({ response })

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
  return axios.post(API_URL + 'signout').then((response) => {
    return response.data
  })
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService
