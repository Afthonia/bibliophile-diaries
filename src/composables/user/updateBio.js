import axios from "axios";

const updateBio = (bio) => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("request sent");

  if (user.token) {
    return axios
      .patch(
        `api/user/bio?id=${bio}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((resp) => {
        if (resp.data) {
          console.log(resp.data);
          return resp.data;
        }
      })
      .catch((err) => {
        console.log(error.value);
        return false;
      });
  } else {
    console.log("no");
    router.push("/login");
    return false;
  }
};

export default updateBio;
