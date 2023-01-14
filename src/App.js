import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    // by default there's no book available
const [books, setBooks] = useState([]);

// event handler for when the user submit the form
const createBook = (title) => {
    // creating a new array to copy from the old array but not deleeting it
    const updateBooks = [
        // copying the old array
        ...books,
        // generaing a random number 
        {id: Math.round(Math.random() * 999), title: title}
       
    ];
    // seetting the setbooks to the updated copy of the old array
    setBooks(updateBooks);

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
           <BookList books={books}/>
            <BookCreate onCreate={createBook}/></div>)
}



export default App;