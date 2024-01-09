import { ref } from "vue"

const getPost = (postId) => {
    const post = ref(null)
    const error = ref(null)
    const load = async () => {
        console.log('request sent')
        try {
            let data = await fetch(
                `https://dummyjson.com/posts/${postId}`
            )

            if (!data.ok) {
                throw Error("No Data Available")
            }

            let postData = await data.json()
            console.log(postData)
            post.value = {
                id: postData.id,
                title: postData.title,
                content: postData.content
            }
            console.log(post.value)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { post, load, error }
}

export default getPost