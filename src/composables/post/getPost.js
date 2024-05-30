import axios from "axios";

const getPost = async (id) => {
  console.log("request sent");

  return await axios
    .get(`http://127.0.0.1:8081/post/one?id=${id}`)
    .then((resp) => {
      if (resp.data) {
        console.log()
        return resp.data;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export default getPost;
