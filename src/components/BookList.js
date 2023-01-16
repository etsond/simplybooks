import BookShow from "./BookShow"

function BookList ({ books, onDelete, onEdit }){

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
            {renderedBooks}
            </div>)
}

export default BookList;