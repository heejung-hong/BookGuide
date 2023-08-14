import { useState, useEffect } from "react"
import { postComment, getComments } from "../../../utils/backend"
import Comment from "../Comment"

export default function CommentSection({ bookId }) {
    // Save comments queried from the database in state
    const [comments, setComments] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        content: ''
    })

    // Query the database for all comments that pertain to this book
    useEffect(() => {
        getComments(bookId)
            .then(comments => setComments(comments))
    }, [])


    // Update the form fields as the user types
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    // Render a form that allows a user to create a comment on submit
    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    // Update the comments in the comment section after a database transaction
    function refreshComments() {
        getComments(bookId)
            .then(newCommentData => setComments(newCommentData))
    }
console.log(bookId)
    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // clear the form
        setCreateFormData({
            name: '',
            content: ''
        })
        // close the form
        setShowCreateForm(false)
        // create the comment in the backend
        postComment({ ...createFormData, bookId: bookId })
            .then(() => refreshComments())
    }

    // conditionally render comments
    let commentElements = [<p key='0' className='text-center'>No comments yet. Be the first to comment!</p>]
    if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment
                key={comment._id}
                data={comment}
                refreshComments={refreshComments}
            />
        })
    }

    // conditionally display the text of the create form button
    let btnText = 'Comment'
    if (showCreateForm) {
        btnText = 'Close'
    }

    return (
        <section>
            <div className="ui container">
                <div>
                <div class="ui horizontal divider"><h3>Reader Insights</h3></div>
                <div>
                <button 
                    className="ui purple basic button"
                    onClick={toggleCreateForm}
                >
                    {btnText}
                </button>
                </div>
                {
                    showCreateForm && <form 
                        className="ui form"
                        onSubmit={handleSubmit}>
                        <input
                            name="name"
                            placeholder="Your name here."
                            value={createFormData.name}
                            onChange={handleInputChange}
                        />
                        <br />
                        <textarea
                            name="content"
                            placeholder="Share your thoughts on this book!"
                            value={createFormData.content}
                            onChange={handleInputChange}
                        />
                        <div>
                        <button 
                            className="ui teal basic button"
                            type="submit"
                        >
                            Post
                        </button>
                        </div>
                    </form>
                }
                {commentElements}
                </div>
            </div>
        </section>
    )
}
