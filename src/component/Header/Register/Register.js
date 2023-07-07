import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './Register.css';
import axios from 'axios';

const Register = ({closeModal, registerSuccess, registerError, isErrorShow, dispatch}) => {
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
            })
            .then((response) => {
                console.log('User registered successfully:', response.data);
                dispatch({type: 'UPDATE_REGISTER_ERROR', payload: response.data.message});
                dispatch({type: 'UPDATE_SUCCESS', payload: response.data.success});
            })
            .catch((error) => {
                console.error('Failed to register user:', error);
            });
    };

    // console.log(registerSuccess)
    useEffect(() => {
        if (registerSuccess) {
            handleClose()
        }
    }, [registerSuccess, closeModal]);

    function handleClose() {
        closeModal();
        dispatch({type:'ERROR RESET'})
    }

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
                    {isErrorShow && <div className="errorLine">{registerError}</div>}
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                    <button className="form-button" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    registerSuccess: state.register.success,
    registerError: state.register.errorinfo,
    isErrorShow: state.register.isErrorShow,
});

export default connect(mapStateToProps)(Register);