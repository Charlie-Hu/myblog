import React from 'react';
import './Sidebar.css'

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-widget">
                <h2>Summary</h2>
                <h4>personal info</h4>
                <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#skill overview">Skills Overview</a></li>
                    <li><a href="#education">Education</a></li>
                </ul>
            </div>
            <div className="sidebar-widget">
                <h4>Experience</h4>
                <ol>
                    <li><a href="#decarbonising">
                        DECARBONISING WASTEWATER TREATMENT WEB APP
                    </a></li>
                    <li><a href="#smart reminder">
                        SMART MEDICATION REMINDER WEB APP
                    </a></li>
                    <li><a href="#sokoban">
                        SOKOBAN FLASK PROJECT
                    </a></li>
                </ol>
                <h4>
                    <a href="#comment">
                        Comment
                    </a>
                </h4>
            </div>
        </aside>
    );
}

export default Sidebar;
