import { useState } from "react";

function BookEdit({ book, onEdit, onSubmit }){ //receiving the book object
// declaring the state for the input
const [title, setTitle] = useState(book.title); //book.title as the default state

// event handler for when the user changes the input
const handleChange = (event) => {
    // updating the state
    setTitle(event.target.value);

};
// adding an event handler
const handleSubmit = (event) => { 
    event.preventDefault(); // preventing the form to not re-submit
    
    onEdit(book.id, title); //put in the id, and the title
    //  console.log('new title is', title);
    onSubmit()
}

// form to pop up when the user click the button
    return <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">
            Save
        </button>
    </form>;
}

export default BookEdit;