import React, {useEffect} from 'react';
import axios from 'axios';
import './CommentSection.css'
import {connect} from "react-redux";

function CommentSection(props) {
    const {dispatch, currentPage, comments} = props
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user_comment/?page=${currentPage}`)
            .then((response) => {
                dispatch({type: 'UPDATE COMMENTS', comments: response.data.comments});
            })
            .catch((error) => {
                console.error('Failed to fetch comments:', error);
            });
    }, [currentPage, comments]);

    const handlePageChange = (page) => {
        // console.log(page)
        dispatch({type: 'PAGE CHANGED', currentPage: page});
    };

    return (
        <div className='commentSection'>
            {comments.map((comment) => (
                <div key={comment.username + comment.time}>
                    <p className='commentUser'>Username:{comment.username}</p>
                    <p className='commentTime'>{comment.time}</p>
                    <p className='commentContent'>{comment.comment}</p>
                    <hr/>
                </div>
            ))}

            <div className='commentPage'>
                <div className='commentPagePosition'>
                    <button className='button-style' onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{currentPage}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='button-style' onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    comments: state.comment.comments,
    currentPage: state.comment.page,
})
export default connect(mapStateToProps)(CommentSection);
