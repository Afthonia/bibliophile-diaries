import { ref } from "vue"

//TODO: modify the endpoints and the way attributes are stored when the backend part is added

const getUserComments = (userID) => {
    const comments = ref([])
    const error = ref(null)
    const load = async () => {
        console.log('request sent')
        try {
            let data = await fetch(
                'https://dummyjson.com/comments'
            )

            if (!data.ok) {
                throw Error("No Comment Available")
            }

            let dataJSON = await data.json()
            console.log(dataJSON.docs)
            comments.value = dataJSON.comments.map((comment) => ({
                id: comment.id,
                postID: comment.postId,
                content: comment.body,
                userID: comment.user.id,
                username: comment.user.username,
            }))
            // comments.value = comments.value.filter(comment => comment.userID === userID)
            console.log(comments.value)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { comments, load, error }
}

const getPostComments = (postID) => {
    const comments = ref([])
    const error = ref(null)
    const load = async () => {
        console.log('request sent')
        try {
            let data = await fetch(
                `https://dummyjson.com/comments/post/${postID}`
            )

            if (!data.ok) {
                throw Error("No Comment Available")
            }

            let dataJSON = await data.json()
            console.log(dataJSON.comments)
            comments.value = dataJSON.comments.map((comment) => ({
                id: comment.id,
                postID: comment.postId,
                content: comment.body,
                userID: comment.user.id,
                username: comment.user.username,
            }))
            console.log(comments.value)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { comments, load, error }
}

export default { getUserComments, getPostComments }
