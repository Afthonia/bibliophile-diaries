import { ref } from "vue"

const shareReview = async (bookName, vote, title, content) => {
    const books = ref([])
    const error = ref(null)

    try {
        const resp = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookName, vote, title, content }),
        })

        if (resp.status == 201) {
            let data = await data.json()
            return { data, error }
        } else {
            throw Error("Sharing Review Failed")
        }

    } catch (err) {
        error.value = err.message
        console.log(error.value)
    }


    return { books, error }
}

export default shareReview
