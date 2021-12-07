import axios from "../../config_axios";

const API_URL = "http://localhost:3000/api/publication/";

class PostService {
  post(formData) {
    return axios.post(API_URL, formData).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }

  getPosts() {
    return axios.get(API_URL).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }

  getPostsFromUser(userId) {
    return axios.get(API_URL + userId).then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }

  delete(idPost) {
    return axios.delete(API_URL + idPost + "/delete").then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
}

export default new PostService();
