import axios from "axios";

export default axios.create({
  baseURL: "../../public/mockData.json",
});
