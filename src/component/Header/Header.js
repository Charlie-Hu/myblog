import React from 'react';
import {connect} from 'react-redux';
import Login from './Login/Login';
import Register from './Register/Register';
import './Header.css';

const Header = ({
  isLoginModalOpen,
  isRegisterModalOpen,
  isHeaderExpanded,
  dispatch,
}) => {
  const handleMouseEnter = () => {
    dispatch({ type: 'EXPAND_HEADER' });
  };

  const handleMouseLeave = () => {
    dispatch({ type: 'COLLAPSE_HEADER' });
  };

  const handleLoginClick = () => {
    dispatch({ type: 'OPEN_LOGIN_MODAL' });
  };

  const handleRegisterClick = () => {
    dispatch({ type: 'OPEN_REGISTER_MODAL' });
  };

  const closeLoginModal = () => {
    dispatch({ type: 'CLOSE_LOGIN_MODAL' });
  };

  const closeRegisterModal = () => {
    dispatch({ type: 'CLOSE_REGISTER_MODAL' });
  };

    return (
        <header className="header">
            <div className="left-section">
                <div
                    className="contact-button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Contact me
                </div>
                {isHeaderExpanded && (
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
                <div className={`overlay ${isLoginModalOpen || isRegisterModalOpen ? 'active' : ''}`}/>
            )}
        </header>
    );
};

const mapStateToProps = (state) => ({
    isLoginModalOpen: state.header.isLoginModalOpen,
    isRegisterModalOpen: state.header.isRegisterModalOpen,
    isHeaderExpanded: state.header.isHeaderExpanded,
});
export default connect(mapStateToProps)(Header);
