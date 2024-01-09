import { ref } from "vue"

const getWord = () => {
    const words = ref("")
    const error = ref(null)

    const load = async (word) => {
        try {
            console.log(word)
            let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)


            if (!data.ok) {
                throw 'The Word Is Not Found...'
            }

            words.value = await data.json()
            console.log(words.value)
        } catch (err) {
            error.value = err
        }
    }

    return { words, load, error }
}

export default getWord