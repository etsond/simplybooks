import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    // by default there's no book available
const [books, setBooks] = useState([]);

// fetching for previous books that was created

const fetchBooks = async() => {
    //getting the responose from axios
    const response = await axios.get('http://localhost:3001/books');
    // setbooks updating the state with response.data from axios
    setBooks(response.data)

};
// using effect to avoid fetch infinitely
useEffect(() => {
    //run at an exact time
    fetchBooks();
    // call after the first render.... stop calling after
}, []);
const editBookById = async (id, newTitle) => {
    // request
    const response = await axios.put(`localhost:3001/books/${id}`, {
      title: newTitle  
    })
    console.log(response)
    // updating the book by id (receiving each book)
    const updatedBooks = books.map((book) => {
        // if book that is being pass into the function
        if(book.id === id) {
            // if that is true upate the new object by returning a copy of it + new updated response from the API 
            return {...book, ...response.data}
        }
        // if its another book then return that book
        return book;
    });
// set the state after you the new book is created
    setBooks(updatedBooks)
};

// delete book per the id
const deleteBookByID = async (id) => {
    // deleting the book
    await axios.delete(`http://localhost:3001/books/${id}`);


    // removing the object using filter (with new array)
    const updatedBooks = books.filter((book) => {
        // return false to remove
        return book.id !== id;
    });
    setBooks(updatedBooks);
};

// event handler for when the user submit the form
const createBook = async (title) => {
// making a request using axios
const response = await axios.post('http://localhost:3001/books', {
    title
});

    // creating a new array to copy from the old array but not deleting it
    const updatedBooks = [
        ...books,
        // adding the new book from axios.data
        response.data
       
    ];
    // // seetting the setbooks to the updated copy of the old array
     setBooks(updatedBooks);
}; 
    return (
       
         <div className="app">
            <h1>Reading List</h1>
            {/* showingg the list of books */}
           <BookList onEditi={editBookById} books={books} onDelete={deleteBookByID}/>
            <BookCreate onCreate={createBook}/></div>)
}

export default App;