import axios from "../../config_axios";
//import store from "../store/index";

const API_URL = "http://localhost:3000/api/publication/";

class PostService {
  post(formData) {
    console.log(formData);
    return axios.post(API_URL, formData).then((response) => {
      return response.data;
    });
  }


  delete(idPost) {
    return axios.delete(API_URL + idPost + "/delete");
  }
}

export default new PostService();
