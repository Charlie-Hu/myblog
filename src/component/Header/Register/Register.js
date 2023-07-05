import React, {useState, useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import './Register.css';
import axios from 'axios';

const Register = ({closeModal, dispatch, registerSuccess, registerError}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const handleRegisterFormSubmit = (event) => {
        event.preventDefault();
        axios.post(
                'http://127.0.0.1:8000/api/register/',
                JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    password_again: passwordAgain,
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response) => {
                console.log('User registered successfully:', response.data);
                dispatch({type: 'UPDATE_REGISTER_ERROR', payload: response.data.message});
                dispatch({type: 'UPDATE_SUCCESS', payload: response.data.success});
            })
            .catch((error) => {
                console.error('Failed to register user:', error);
                dispatch({type: 'UPDATE_REGISTER_ERROR', payload: error.message});
            });
    };

    // console.log(registerSuccess)
    useEffect(() => {
        if (registerSuccess) {

            closeModal();
        }
    }, [registerSuccess, closeModal]);

    return (
        <div>
            <div className="modal">
                <h2 className="form-title">Register</h2>
                <form className="login-form" onSubmit={handleRegisterFormSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <input
                        type="password"
                        placeholder="Password Again"
                        id="2password"
                        value={passwordAgain}
                        onChange={(e) => setPasswordAgain(e.target.value)}
                    />
                    <br/>
                    <div className="errorLine">{registerError}</div>
                    <button className="form-button" onClick={closeModal}>
                        Close
                    </button>
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    registerSuccess: state.register.success,
    registerError: state.register.errorinfo,
});

export default connect(mapStateToProps)(Register);
