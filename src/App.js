import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    // by default there's no book available
const [books, setBooks] = useState([]);

const editBookById = (id, newTitle) => {
    // updating the book by id (receiving each book)
    const updatedBooks = books.map((book) => {
        // if book that is being pass into the function
        if(book.id === id) {
            // if that is true upate the new object by returning a copy of it + new title
            return {...book, title: newTitle}
        }
        // if its another book then return that book
        return book;
    });
// set the state after you the new book is created
    setBooks(updatedBooks)
};


// delete book per the id
const deleteBookByID = (id) => {
    // removing the object using filter (with new array)
    const updatedBooks = books.filter((book) => {
        // return false to remove
        return book.id !== id;
    });
    setBooks(updatedBooks);
};

// event handler for when the user submit the form
const createBook = (title) => {
    // creating a new array to copy from the old array but not deleeting it
    const updatedBooks = [
        // copying the old array
        ...books,
        // generaing a random number 
        {id: Math.round(Math.random() * 9999), title: title}
       
    ];
    // seetting the setbooks to the updated copy of the old array
    setBooks(updatedBooks);

    // books.push({ id: 123, title: title});
    // console.log(books)
    // setBooks(books)
    // updating the book

    // TODO update piece of state

    // console.log("Need to add book with: ", title)

}; 

    return (
       
         <div className="app">
            {/* showingg the list of books */}
           <BookList onEditi={editBookById} books={books} onDelete={deleteBookByID}/>
            <BookCreate onCreate={createBook}/></div>)
}



export default App;