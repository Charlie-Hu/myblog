import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import "./Login.css";
import axios from "axios";

const Login = ({closeModal}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

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
            .then(response => {
                console.log(username, password);
                console.log('User logged in successfully:', response.data);
                // Dispatch an action to update the login state in the store
                dispatch({type: 'LOGIN_SUCCESS', payload: response.data});
            })
            .catch(error => {
                console.error('Failed to log in:', error);
                // Dispatch an action to handle login failure in the store
                dispatch({type: 'LOGIN_FAILURE', payload: error.message});
            });
    };

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
                    <br/>
                    <button className="form-button" onClick={closeModal}>Close</button>
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
