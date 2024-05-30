import axios from "axios";

const getPostComments = async (id) => {
  console.log("request sent");

  return await axios
    .get(`http://127.0.0.1:8081/comment/post/list?id=${id}`)
    .then((resp) => {
      if (resp.data) {
        console.log(resp.data);
        return resp.data;
      }
    })
    .catch((err) => {
      console.log(err.value);
    });
};

export default getPostComments;
