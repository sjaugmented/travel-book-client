const axios = require("axios")
const local = "http://localhost:4000/api/v1"
const sethImac = "http://10.0.1.72:4000/api/v1"
const sethMacbook = "http://10.0.1.73:4000/api/v1"
const evansLocal = "http://192.168.1.8:4000/api/v1"

export default class TripModel {
  static all = async () => {
    try {
      const response = await fetch(`${sethMacbook}/trips`)
      const trips = await response.json()
      return trips
    } catch (error) {
      console.log(error)
    }
  }

  static create = async (data) => {
    console.log("tripData:", data)
    try {
      const newTrip = await axios.post(`${sethMacbook}/trips/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      return newTrip
    } catch (error) {
      console.log(error)
    }
  }

  static show = async (name) => {
    try {
      const response = await fetch(`${sethMacbook}/trips/${name}`)
      const trip = await response.json()
      return trip
    } catch (error) {
      console.log(error)
    }
  }
}