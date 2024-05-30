import { ref } from "vue";

// const getBooks = () => {
//   const books = ref([]);
//   const error = ref(null);
//   const load = async (value, searchType) => {
//     console.log("request sent");
//     try {
//       let data = await fetch(
//         `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${value}`
//       );

//       if (!data.ok) {
//         throw Error("No Data Available");
//       }

//       let dataJSON = await data.json();
//       console.log(dataJSON.docs);
//       books.value = dataJSON.items.map((book) => ({
//         title: book.volumeInfo.title,
//         authors: book.volumeInfo.authors,
//         coverUrl: book.volumeInfo.imageLinks?.thumbnail,
//       }));
//       console.log(books.value);
//     } catch (err) {
//       error.value = err.message;
//       console.log(error.value);
//     }
//   };

//   return { books, load, error };
// };

const getBooks = () => {
  const books = ref([]);
  const error = ref(null);
  const load = async (value) => {
    console.log("request sent");
    try {
      let data = await fetch(`http://127.0.0.1:5000/books/${value}`);

      if (!data.ok) {
        throw Error("No Data Available");
      }

      let dataJSON = await data.json();
      console.log(dataJSON);
      books.value = dataJSON.books.map((book) => ({
        id: book.id,
        title: book.title,
        authors: book.authors,
        coverUrl: book.cover_url,
      }));
      console.log(books.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { books, load, error };
};

export default getBooks;
