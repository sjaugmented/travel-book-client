const axios = require('axios')
const local = 'http://192.168.1.8:4000/api/v1'

export default class TripModel {
  static all = async () => {
    try {
      const response = await fetch(`${local}/trips`)
      const trips = await response.json()
      return trips
    } catch (error) {
      console.log(error)
    }
  }

  static create = async (data) => {
    try {
      const newTrip = await axios.post(`${local}/trips/create`, {
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

  static show = async (id) => {
    try {
      const trip = await fetch(`${local}/trips/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
}
