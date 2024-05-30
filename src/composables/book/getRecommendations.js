import { ref } from "vue";

const getRecommendations = () => {
  const books = ref([]);
  const error = ref(null);
  const load = async (value) => {
    console.log("request sent");
    console.log(value);
    try {
      let data = await fetch("http://127.0.0.1:5000/rate-books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: value,
      });

      if (!data.ok) {
        throw Error("No Data Available");
      }

      let dataJSON = await data.json();
      console.log(`data: ${dataJSON.recommendations}`);
      books.value = dataJSON.recommendations.map((book) => ({
        id: book.id,
        title: book.title,
        authors: book.author,
        publisher: book.publisher,
        coverUrl: book.cover_url,
      }));
      console.log(books.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }

    return books;
  };

  return { books, load, error };
};

export default getRecommendations;
