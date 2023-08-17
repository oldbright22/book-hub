import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07304977e05f456bb7dfde7301609482",
  },
});
