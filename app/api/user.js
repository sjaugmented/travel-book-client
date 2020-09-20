const local = 'http://localhost:4000/api/v1'
const evansLocal = 'http://192.168.1.8:4000/api/v1'
const sethImac = 'http://10.0.1.72:4000/api/v1'
const sethMacbook = 'http://10.0.1.73:4000/api/v1'
const axios = require('axios')

export default class UserModel {
  static all = async () => {
    try {
      const allUsers = await axios.get(`${local}/users`)
      return allUsers
    } catch (error) {
      console.log(error)
    }
  }
  static create = async (userData) => {
    console.log('user.js:', userData)
    try {
      const id = userData.id
      const newUser = await axios.post(`${evansLocal}/users/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      return newUser
    } catch (error) {
      console.log(error)
    }
  }
  static show = async (googleId) => {
    try {
      const result = await axios.get(`${evansLocal}/users/${googleId}`)
      return result.data
    } catch (error) {
      console.log(error)
    }
  }
}
