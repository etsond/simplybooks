import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
    // by default there's no book available
const [books, setBooks] = useState([]);


// event handler for when the user submit the form

const createBook = (title) => {
    console.log("Need to add book with: ", title)
}; 

    return <div><BookCreate onCreate={createBook}/></div>
}



export default App;