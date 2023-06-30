import React, {useState} from 'react';
import "./Register.css";
import axios from "axios";

const Register = ({closeModal}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const handleRegisterFormSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/register/', {
            username: username,
            email: email,
            password: password,
            password_again: passwordAgain
        })
            .then(response => {
                console.log('User registered successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to register user:', error);
            });
    };

    return (
        <div>
            <div className="modal">
                <h2 className="form-title">Register</h2>
                <form className="login-form" onSubmit={handleRegisterFormSubmit}>
                    <input type="text" placeholder="Username" id="username" value={username}
                           onChange={e => setUsername(e.target.value)}/>
                    <br/><br/>
                    <input type="email" placeholder="Email" id="email" value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    <br/><br/>
                    <input type="password" placeholder="Password" id="password" value={password}
                           onChange={e => setPassword(e.target.value)}/>
                    <br/><br/>
                    <input type="password" placeholder="Password Again" id="2password" value={passwordAgain}
                           onChange={e => setPasswordAgain(e.target.value)}/>
                    <br/><br/>
                    <button type="submit" className="form-button">Submit</button>
                </form>
                <button className="form-button" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Register;
