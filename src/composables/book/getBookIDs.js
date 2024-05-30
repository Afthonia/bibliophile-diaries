import axios from "axios";

const getBookIDS = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("request sent");

  if (user && user.token) {
    return await axios
      .get(`api/bookshelf/list?id=${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(async (resp) => {
        const bookIDs = ref([]);
        if (resp.data) {
          console.log(resp.data);
          resp.data.map((book) => {
            bookIDs.value.push(book.book_id);
          });
          console.log(bookIDs.value);
          return bookIDs.value;
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

export default getBookIDS;
