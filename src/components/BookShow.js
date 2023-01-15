// import BookList from "./BookList";

function BookShow ({ book, onDelete}){
//    whenever the usre click the button passing the onDelete
const handleclick = () => {
    // this has the id of the specific book to delete
    onDelete(book.id);
};
   
   return ( 
        <div className="book-show">
            {book.title}
                    <div className="actions">
                        {/* when user click event handler(eventHandler) */}
                        <button className="delete" onClick={handleclick}>
                            Delete
                         </button>
                </div>
        </div>)
     }


export default BookShow;