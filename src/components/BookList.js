import BookShow from "./BookShow"

function BookList ({ books }){

    // mapping over the books
    const renderedBooks = books.map((book, onDelete) => {
        //  // for each of the id show the book
        return (
        
        <BookShow 
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