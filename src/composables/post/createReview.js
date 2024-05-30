import axios from "axios";
import router from "../../router";

const createReview = (title, content, book_title, vote) => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("request sent");

  if (user.token) {
    return axios
      .post(
        "api/post",
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
          return resp.data;
        }
      })
      .catch((err) => {
        console.log(error.value);
      });
  } else {
    console.log("no");
    router.push("/login");
    return Promise.reject("User not authenticated");
  }
};

export default createReview;

// const createReview = () => {
//   const newReview = ref(null);
//   const error = ref(null);
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFpc2VzZW43NjVAZ21haWwuY29tIiwiZXhwIjoxNzI0NDg5NTM1LCJuYW1lIjoiYXlzZSIsInVzZXJfaWQiOiIxIn0.It0_miL7CbopMvMhNK5LEnbjUHmG4dHArUAg7LnfAJ0";

//   const load = async (title, content, book_title, vote) => {
//     console.log("request sent");
//     try {
//       let data = await fetch("api/post", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(title, content, book_title, vote),
//       });

//       if (!data.ok) {
//         throw Error("No Data Available");
//       }

//       console.log(data);

//       let dataJSON = await data.json();
//       console.log(dataJSON);
//       newReview.value = {
//         id: dataJSON.id,
//         authorId: dataJSON.author_id,
//         author: dataJSON.author,
//         bookTitle: dataJSON.book_title,
//         vote: dataJSON.vote,
//         title: dataJSON.title,
//         content: dataJSON.content,
//         isLiked: dataJSON.is_liked,
//         likeCount: dataJSON.like_count,
//         createdAt: dataJSON.created_at,
//       };

//       console.log(categories.value);
//     } catch (err) {
//       error.value = err.message;
//       console.log(error.value);
//     }
//   };

//   return { newReview, load, error };
// };
