import React, {useState} from 'react';
import axios from "axios";
import './InputBox.css'


function InputBox(props) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue) {
            axios.post('https://api.example.com/comments', {inputValue})
                .then(response => {
                    console.log('Comment submitted successfully:', response.data);
                    setInputValue("");
                })
                .catch(error => {
                    console.error('Failed to submit comment:', error);
                });
        }
    };

return (
    <form onSubmit={handleChange}>
            <textarea
                className='large-input'
                value={inputValue}
                onChange={handleChange}
                placeholder="Type your comment..."
            />
        <br/>
        <button className='submit-button' onClick={() => {
            handleSubmit()
        }}>Submit
        </button>
    </form>
);
}
;


export default InputBox;