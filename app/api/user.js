const local = "http://localhost:4000/api/v1";
const evansLocal = "http://192.168.1.8:4000/api/v1";
const sethLocal = "http://10.0.1.72:4000/api/v1";
const axios = require("axios");

export default class UserModel {
  static all = async () => {
    try {
      const allUsers = await axios.get(`${local}/users`);
      return allUsers;
    } catch (error) {
      console.log(error);
    }
  };
  static create = async (userData) => {
    // console.log('userData', userData)
    const id = userData.user.id;

    try {
      const newUser = await axios.post(`${local}/users/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      return newUser;
    } catch (error) {
      console.log(error);
    }
  };
  static show = async (googleId) => {
    const result = await axios.get(`${local}/users/${googleId}`);
    return result.data.user;
  };
}
