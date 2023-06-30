import React from 'react';
import "./Login.css"

const Login = ({closeModal}) => {
    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="modal">
                <h2 className="form-title">Login</h2>
                <form className="login-form" onSubmit={handleLoginFormSubmit}>
                    <input type="text" placeholder="Username"/>
                    <br/><br/>
                    <input type="email" placeholder="Email"/>
                    <br/><br/>
                    <input type="password" placeholder="Password"/>
                </form>
                <button className="form-button" onClick={closeModal}>
                    Close
                </button>
                <button className="form-button" onClick={closeModal}>
                    submit
                </button>
            </div>
        </div>
    );
};
export default Login;