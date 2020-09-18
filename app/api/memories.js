const axios = require("axios");
const local = "http://localhost:4000/api/v1";
const sethLocal = "http://10.0.1.72:4000/api/v1";

export default class MemoryModal {
  static create = async (data) => {
    try {
      const newMemory = await axios.post(`${local}/memories/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };
}
