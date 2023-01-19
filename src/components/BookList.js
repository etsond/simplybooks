import BookShow from "./BookShow"
import { useContext } from "react";
import BookContext from "../context/books";

function BookList ({ books, onDelete, onEdit }){
    const {count, incrementCount}= useContext(BookContext);

    // mapping over the books
    const renderedBooks = books.map((book) => {
        //  // for each of the id show the book
        return (
        
        <BookShow 
        onEdit={onEdit}
        onDelete={onDelete} 
        key={book.id}
         book={book} 
         />
         );
        // also passing the onDelete prop
    });
//    showing the book
    return (
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click Me</button>
            {renderedBooks}
            </div>)
}

export default BookList;