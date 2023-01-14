import BookShow from "./BookShow"

function BookList ({ books }){

    // mapping over the books
    const renderedBooks = books.map((book) => {
        //  // for each of the id show the book
        return <BookShow key={book.id} book={book} />;
    });
//    showing the book
    return <div className="book-list">{renderedBooks}</div>
}

export default BookList;