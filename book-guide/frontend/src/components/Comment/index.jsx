import { useState } from "react"
import { updateComment, deleteComment } from "../../../utils/backend"

export default function Comment({ data, refreshComments }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name: data.name,
        content: data.content,
        bookId: data.bookId,
    })
    console.log("inside comment component", data)

    // Update the form fields as the user types
    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // close the form
        setShowEditForm(false)
        // update the comment in the backend
        updateComment(editFormData, data._id)
            .then(() => refreshComments())
    }

    // Delete a comment
    function handleDelete() {
        deleteComment(data._id)
            .then(() => refreshComments())
    }

    //  Default JSX of each comment
    let commentElement = <div className="ui comments">
        <div className="comment">
            <div className="content">
        <p className="author">{data.name}</p>
        <p className="text">{data.content}</p>
        </div>
        </div>
        <div style={{
                  padding: "20px"
                }}>
            <button className="tiny ui primary button" onClick={() => { setShowEditForm(true) }}>Edit</button>
            <button className="tiny ui primary button" onClick={handleDelete}>Delete</button>
        </div>
    </div>

    // Change the comment to a form if the showEditForm state variable is true
    if (showEditForm) {
        commentElement = <form className="ui form"
            onSubmit={handleSubmit}
            >
            <input
                name="name"
                placeholder="Your name"
                value={editFormData.name}
                onChange={handleInputChange}
            />
            <br />
            <textarea
                name="content"
                placeholder="Share your thoughts!"
                value={editFormData.content}
                onChange={handleInputChange}
            />
            <div style={{
                  padding: "20px"
                }}>
                <button className="tiny ui primary button" onClick={() => { setShowEditForm(false) }}>Close</button>
                <button className="tiny ui primary button" type="submit">Post</button>
            </div>
        </form>
    }

    return commentElement
}
