import { ref } from "vue";

const getCategories = () => {
  const categories = ref([]);
  const error = ref(null);

  const load = async () => {
    console.log('request sent')
    try {
      let data = await fetch("http://127.0.0.1:5000/categories");

      if (!data.ok) {
        throw Error("No Data Available");
      }

      console.log(data)

      let dataJSON = await data.json();
      console.log(dataJSON);
      categories.value = dataJSON.categories;

      console.log(categories.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { categories, load, error };
};

export default getCategories;
