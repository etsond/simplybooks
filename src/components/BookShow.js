import { useState } from "react";
import BookEdit from "./BookEdit"

// import BookList from "./BookList";

function BookShow ({ book, onDelete, onEdit }){
// dont show the edit button by default
const [showEdit, setShowEdit] = useState(false);

//    whenever the usre click the button passing the onDelete
const handleDeleteleclick = () => {
    // this has the id of the specific book to delete
    onDelete(book.id);
};

const handleEditClick = () => {
    // toggle the value, so setting to the opposite of what it currently is
    setShowEdit(!showEdit)
};

const handleSubmit = (id, newTitle) => {
    setShowEdit(false)
    // helps to remove both onSubmit and oneEdit to one since they do the same thing
    onEdit(id, newTitle)
};

// showing logic, by default show the book title
let content = <h3>{book.title}</h3>
// if show edit is true then show BookEdit component.
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />; // taking the object of book and passing it --- BookEdit
    }

   return ( 
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/see/${book.id}/300/200`} />
            <div>{content}</div>
                    <div className="actions">
                        {/* display the icon */}
                        <button className="edit" onClick={handleEditClick}>
                            Edit
                            </button>
                        {/* when user click event handler(eventHandle) */}
                        <button className="delete" onClick={handleDeleteleclick}>
                            Delete
                         </button>
                </div>
        </div>)
     }


export default BookShow;