import { ref } from 'vue';

const getBestSellers = async () => {
    const apiKey = 'I6YCVyFvfiGRy1fGUBhsu4iOXH2RG0NT';
    const listName = 'hardcover-fiction';
    const bestSellers = ref([]);
    const error = ref(null);

    const loadBestsellers = async () => {
        try {
            const response = await fetch(
                `https://api.nytimes.com/svc/books/v3/lists.json?list-name=${listName}&api-key=${apiKey}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch best sellers');
            }

            const data = await response.json();
            const books = data.results;

            for (const book of books) {
                const bookCover = await fetchBookCover(book.isbns[0].isbn10);
                const bookDetails = {
                    title: book.book_details[0].title,
                    authors: book.book_details[0].author,
                    publisher: book.book_details[0].publisher,
                    cover: bookCover,
                };
                bestSellers.value.push(bookDetails);
            }
        } catch (err) {
            error.value = err.message;
            console.error(error.value);
        }
    }

    return { bestSellers, loadBestsellers, error };
};

const fetchBookCover = async (isbn) => {
    try {
        const response = await fetch(
            `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch book cover');
        }

        return response.url;
    } catch (err) {
        console.error(err.message);
        return null;
    }
};

export default getBestSellers;
