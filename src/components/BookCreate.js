// input elementnneds a value prop and the onChange prop
import { useState } from "react";


function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    // keeps track of any change the user input
    const handleChange = (event) => {
        // to look at what the usre type and then update the title state
        setTitle(event.target.value);

    };

    const handleSubmit = (event) => {
        // form element watns to submit by realoding so preventing
        event.preventDefault();
        // calling on create to pass the users input
        onCreate(title);
        // after the user enter the title then to empty the input
        setTitle('');
    }
    return (
        // adding a class to add green background behind book, title, and the submit button
    <div className="book-create">
        <h3>Add a Book</h3>
        {/* calling the handler when the user submit the form */}
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            {/* o */}
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button" >Submit</button>
        </form>
    </div>
    );
}

export default BookCreate;