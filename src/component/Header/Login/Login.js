import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import "./Login.css";
import axios from "axios";

const Login = ({closeModal, loginSuccess, loginError, dispatch}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login/', JSON.stringify({
            username: username,
            password: password,
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // console.log(response.data.message)
                dispatch({type: 'LOGIN_SUCCESS', payload: response.data.login});
                dispatch({type: 'LOGIN_SUCCESS_USER', payload: response.data.username});
                dispatch({type: 'LOGIN_ERROR', payload: response.data.message});
            })
            .catch((error) => {
                console.error('Failed to log in:', error);
            });
    };
    useEffect(() => {
        if (loginSuccess) {
            const currentTime = new Date().toString();
            sessionStorage.setItem(username, currentTime);
            console.log(loginSuccess)
            closeModal();
        }
        else{
            console.log(loginError)
        }
    }, [loginSuccess, closeModal]);
    return (
        <div>
            <div className="modal">
                <h2 className="form-title">Login</h2>
                <form className="login-form" onSubmit={handleLoginFormSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <br/><br/>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br/><br/>
                    <div className="errorLine">{loginError}</div>
                    <button className="form-button" onClick={closeModal}>Close</button>
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    loginSuccess: state.login.login,
    username: state.login.username,
    loginError: state.login.error
});
export default connect(mapStateToProps)(Login);
