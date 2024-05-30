import axios from "axios";
import router from "../../router";

const toggleBookshelf = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("request sent");

  if (user && user.token) {
    return await axios
      .patch(
        `api/bookshelf/manage?id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp.data);
          return resp.data;
        }
        return null;
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
        // if (err.response.status === 401) {
        //   router.push("/login");
        // }
      });
  } else {
    console.log("no");
    router.push("/login");
    return null;
  }
};

export default toggleBookshelf;
