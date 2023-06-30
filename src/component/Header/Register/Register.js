import React from 'react';
import "./Register.css"

const Register = ({closeModal}) => {
    const handleRegisterFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="modal">
                <h2 className="form-title">Register</h2>
                <form className="login-form" onSubmit={handleRegisterFormSubmit}>
                    <input type="text" placeholder="Username"/>
                    <br/><br/>
                    <input type="email" placeholder="Email"/>
                    <br/><br/>
                    <input type="password" placeholder="Password"/>
                    <br/><br/>
                    <input type="2password" placeholder="Password Again"/>
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
export default Register;