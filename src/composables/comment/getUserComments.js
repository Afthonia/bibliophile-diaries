import axios from "axios";

const getUserComments = async (id) => {
  console.log("request sent");

  return await axios
    .get(`api/comment/user?id=${id}`)
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

export default getUserComments;
