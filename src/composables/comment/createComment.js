import axios from "axios";
import router from "../../router";

const createComment = async (comment, postID) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    axios
      .post(
        "http://127.0.0.1:8081/comment",
        {
          post_id: postID,
          content: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((resp) => {
        if (resp.status === 201) {
          console.log(resp.data);
          return true;
        } else {
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);

        if (err.response.status === 401) {
          router.push("/login");
        } else {
          return false
        }
      });
  } else {
    console.log("no");
    router.push("/login");
    return false;
  }
};

export default createComment;
