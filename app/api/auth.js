const local = "http://localhost:4000/api/v1";

export default class Auth {
  static login = async () => {
    try {
      const response = await fetch(`${local}/auth/login`);
      const trips = await response.json();
      return trips;
    } catch (error) {
      console.log(error);
    }
  };
}
