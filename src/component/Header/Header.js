import React, {useState} from 'react';
import './Header.css'

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    return (
        <header className='header'>
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
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
