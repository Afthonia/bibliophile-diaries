import { ref } from "vue"

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const load = async () => {
        console.log('request sent')
        try {
            let data = await fetch(
                'https://dummyjson.com/posts'
            )

            if (!data.ok) {
                throw Error("No Post Available")
            }

            let dataJSON = await data.json()
            console.log(dataJSON.posts)
            posts.value = dataJSON.posts.map((post) => ({
                id: post.id,
                title: post.title,
                content: post.body,
            }))
            console.log(posts.value)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, load, error }
}

export default getPosts
