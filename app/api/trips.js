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
}
