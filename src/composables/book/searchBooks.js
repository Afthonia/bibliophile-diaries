import { ref } from "vue";

const searchBooks = () => {
  const books = ref([]);
  const error = ref(null);
  const load = async (value) => {
    console.log("request sent");
    try {
      let data = await fetch(`http://127.0.0.1:5000/search/${value}`);

      if (!data.ok) {
        throw Error("No Data Available");
      }

      let dataJSON = await data.json();
      console.log(dataJSON);
      books.value = dataJSON.search_results.map((book) => ({
        id: book.id,
        title: book.title,
        authors: book.authors,
        publisher: book.publisher,
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

export default searchBooks;
