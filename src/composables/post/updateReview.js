import axios from "axios";
import router from "../../router";

const updateReview = (id, title, content, book_title, vote) => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("request sent");
  console.log(content)

  if (user && user.token) {
    return axios
      .patch(
        `api/post?id=${id}`,
        {
          title: title,
          content: content,
          book_title: book_title,
          vote: vote,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((resp) => {
        if (resp.data) {
          console.log(resp.data);
          return true;
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  } else {
    console.log("no");
    router.push("/login");
  }
};

export default updateReview;
