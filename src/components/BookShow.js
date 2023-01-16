import { useState } from "react";
import BookEdit from "./BookEdit"

// import BookList from "./BookList";

function BookShow ({ book, onDelete }){
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
}

// showing logic, by default show the book title
let content = <h3>{book.title}</h3>
// if show edit is true then show BookEdit component.
    if (showEdit) {
        content = <BookEdit />;
    }




   return ( 
        <div className="book-show">
            <div>{content}</div>
                    <div className="actions">
                        {/* display the icon */}
                        <button className="edit" onClick={handleEditClick} >Edit</button>
                        {/* when user click event handler(eventHandle) */}
                        <button className="delete" onClick={handleDeleteleclick}>
                            Delete
                         </button>
                </div>
        </div>)
     }


export default BookShow;