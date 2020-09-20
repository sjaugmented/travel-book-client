const axios = require("axios")
const local = "http://localhost:4000/api/v1"
const sethLocal = "http://10.0.1.72:4000/api/v1"
const evansLocal = "http://192.168.1.8:4000/api/v1"
export default class MemoryModel {
  static all = async () => {
    try {
      const response = await fetch(`${local}/memories`)
      const memories = await response.json()
      return memories
    } catch (error) {
      console.log(error)
    }
  }

  static create = async (data) => {
    try {
      const newMemory = await axios.post(`${local}/memories/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      return newMemory
    } catch (error) {
      console.log(error)
    }
  }
  static show = async (memory) => {
    try {
      const foundMemory = await axios.get(`${local}/memories/${memory._id}`)
      return foundMemory
    } catch (error) {
      console.log(error)
    }
  }
  static delete = async (memory) => {
    console.log(memory)
    try {
      const deletedMemory = await axios.delete(`${local}/posts/${memory._id}`, {
        // method: 'DELETE',
        // headers: {
        //     'Content-Type': 'application/json'
        // }
      })
      console.log("deleted>>>>>", deletedMemory)
      return deletedMemory
    } catch (error) {
      console.log(error)
    }
  }
}
