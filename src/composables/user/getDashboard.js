import axios from "axios";

const getDashboard = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return await axios
      .get("api/user/dashboard", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        params: {
          id: `${user.id}`,
        },
      })
      .then((resp) => {
        if (resp.data) {
          console.log(resp.data);
          return resp.data;
        } else {
          return {
            posts: 0,
            comments: 0,
            bookshelf: [],
          };
        }
      });
  }
};

export default getDashboard;
