import React, {useState} from 'react';
import axios from 'axios';
import './InputBox.css';
import {connect} from 'react-redux';

function InputBox(props) {
    const [inputValue, setInputValue] = useState('');
    const {dispatch, loginSuccess, currentPage} = props;

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (loginSuccess) {
            if (inputValue) {
                axios
                    .post('http://127.0.0.1:8000/api/user_comment/', {
                        comment: inputValue,
                        username: sessionStorage.key(0)
                    })
                    .then((response) => {
                        console.log('Comment submitted successfully:', response.data);
                        setInputValue('');
                        axios.get(`http://127.0.0.1:8000/api/user_comment/?page=${currentPage}`)
                            .then((response) => {
                                dispatch({type: 'UPDATE_COMMENTS', comments: response.data.comments});
                            })
                            .catch((error) => {
                                console.error('Failed to fetch comments:', error);
                            });
                    })
                    .catch((error) => {
                        console.error('Failed to submit comment:', error);
                    });
            }
        } else {
            dispatch({type: 'OPEN_LOGIN_MODAL'});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <textarea
                    className="large-input"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type your comment..."
                />
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => ({
    loginSuccess: state.login.login,
    currentPage: state.comment.page,
});

export default connect(mapStateToProps)(InputBox);
