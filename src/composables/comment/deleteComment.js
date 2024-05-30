import axios from "axios";
import router from "../../router";

const deleteComment = (id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return axios
      .delete(`api/comment?id=${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp.data);
          router.go(0);
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        // console.log(err.response.status);

        // if (err.response.status === 401) {
        //   router.push("/login");
        // }
        return false;
      });
  } else {
    console.log("no");
    router.push("/login");
  }
};

export default deleteComment;
