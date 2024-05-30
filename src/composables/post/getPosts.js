import axios from "axios";

const getPosts = async (id = 0) => {
  console.log("request sent");

  return await axios
    .get("api/post/list")
    .then((resp) => {
      if (resp.data) {
        console.log(resp.data);

        if (id === 0) {
          return resp.data;
        } else {
          let posts = [];
          resp.data.forEach((post) => {
            if (post.author_id === id) {
              posts.push(post);
            }
          });
          console.log(posts)
          return posts
        }
      }
    })
    .catch((err) => {
      console.log(error.value);
    });
};

export default getPosts;
