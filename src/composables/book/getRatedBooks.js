import { ref } from "vue";

const getRatedBooks = () => {
  const books = ref([]);
  const error = ref(null);
  const load = async (value) => {
    console.log("request sent");
    try {
      let data = await fetch(`http://127.0.0.1:5000/choose/${value}`, {
        method: "POST",
      });

      if (!data.ok) {
        throw Error("No Data Available");
      }

      let dataJSON = await data.json();
      console.log(dataJSON);
      books.value = dataJSON.choices.map((book) => ({
        id: book.id,
        title: book.title,
        author: book.author,
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

export default getRatedBooks;
