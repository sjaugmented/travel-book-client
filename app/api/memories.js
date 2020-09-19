const axios = require('axios')
const local = 'http://localhost:4000/api/v1'
const sethLocal = 'http://10.0.1.72:4000/api/v1'
const evansLocal = 'http://192.168.1.8:4000/api/v1'
export default class MemoryModel {
  static create = async (data) => {
    try {
      const newMemory = await axios.post(`${evansLocal}/memories/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      return newMemory
    } catch (error) {
      console.log(error)
    }
  }
}
