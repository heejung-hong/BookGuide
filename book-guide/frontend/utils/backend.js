import axios from 'axios'
// axios is better for crud operations
// Comment component will execute getComment and postComment functions
export async function getComments(bookId) {
    const { data } = await axios.get(`/api/comments/${bookId}`)
    return data
}

export async function postComment(comment) {
    const { data } = await axios.post('/api/comments', comment)
    return data
}

// CommentSection will execute updateComment and deleteComment functions
export async function updateComment(comment, id) {
    const { data } = await axios.put(`/api/comments/${id}`, comment)
    return data
}

export async function deleteComment(id) {
    const { data } = await axios.delete(`/api/comments/${id}`)
    return data
}
