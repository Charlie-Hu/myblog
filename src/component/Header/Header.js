import React, {useState} from 'react';
import './Header.css';
import Login from "./Login/Login";
import Register from "./Register/Register";

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    const handleLoginClick = () => {
        setIsLoginModalOpen(true);
    };

    const handleRegisterClick = () => {
        setIsRegisterModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const closeRegisterModal = () => {
        setIsRegisterModalOpen(false);
    };

    return (
        <header className={'header'}>
            <div className="left-section">
                <div
                    className="contact-button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Contact me
                </div>
                {isExpanded && (
                    <div className="contact-info">
                        <p>Email: puputoo6473@gmail.com</p>
                        <p>Phone: 0416493134</p>
                        <p>Location:Brisbane</p>
                    </div>
                )}
            </div>
            <div className="right-section">
                <div className="logo">Charlie want to be web/software developer</div>
                <nav className="horizontal-menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li>
                            <button onClick={handleLoginClick}>Login</button>
                        </li>
                        <li>
                            <button onClick={handleRegisterClick}>Register</button>
                        </li>
                    </ul>
                </nav>
            </div>
            {isLoginModalOpen && (
                <div className="modal-overlay">
                    <Login closeModal={closeLoginModal}/>
                </div>
            )}

            {isRegisterModalOpen && (
                <div className="modal-overlay">
                    <Register closeModal={closeRegisterModal}/>
                </div>
            )}

            {(isLoginModalOpen || isRegisterModalOpen) && (
                <div className={`overlay ${isLoginModalOpen || isRegisterModalOpen ? 'active' : ''}`} />
            )}
        </header>
    );
};

export default Header;
