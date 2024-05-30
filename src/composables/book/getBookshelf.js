import axios from "axios";
import { ref } from "vue";

const getBookshelf = async (ids) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("request sent");

  if (user && user.token) {
    
        return await axios
          .post(
            "http://127.0.0.1:5000/bookshelf",
            {
              ids: ids,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((resp) => {
            if (resp.data) {
              console.log(resp.data);
              return resp.data.books;
            }
          })
          .catch((err) => {
            console.log(err);
            return [];
          });
     

    
  } else {
    console.log("no");
    router.push("/login");
  }
};
export default getBookshelf;
