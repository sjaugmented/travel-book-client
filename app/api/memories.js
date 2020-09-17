const axios = require('axios')
const local = 'http://192.168.1.8:4000/api/v1'

export default class MemoryModel {
  static create = async (data) => {
    try {
      const newMemory = await axios.post(`${local}/memories/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.log(error)
    }
  }
}
