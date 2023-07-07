import React from 'react';
import "./Content.css"
import InputBox from "./InputBox/InputBox";
import CommentSection from "./ComentSection/CommentSection";

function Content(props) {
    return (<div className="content">
        <h1>About</h1>
        <p>
            Since I haven't found a development-related job for half a year after graduation, I specially made
            this website for practice. If you have a job opportunity, please contact me. As a graduate, I don't
            care about salary. I have 820 visa, I can get pr immediately, I don't need employer guarantee (it
            will change after finding a job). Will continue to update the function.
        </p>
        <h1>Personal Detail</h1>
        <h3 className='subheader' id="profile">Profile</h3>
        <p>
            I am a recent IT graduate from UWA and I have a strong passion
            for web development. I enjoy the happiness that creating brings
            me and I aspire to create high-quality, user-friendly, and
            engaging websites to meet clients' needs. Although I only have
            one year of Python development experience so far, I have
            participated in two team projects and one individual project
            where I completed most of the features alone. I am a fast learner
            with a strong enthusiasm for self-learning. I am also able to
            effectively manage projects and collaborate with positive team
            members.
        </p>
        <h3 className='subheader' id="skill overview">Skill Overview</h3>

        <ul>
            <li>Front-end: HTML, CSS, Javascript, Jquery, React</li>
            <li>Back-end: Django, Flask</li>
            <li>Database: MySQL, sqlite, MongoDB</li>
            <li>Cloud Service: AWS</li>
            <li>Programming Language: Python(main), R language, Java, C, bash</li>
            <li>Version Control: Git</li>
            <li>Data Analysis: Machine learning, scikit-learn, PowerBI</li>
        </ul>

        <h3 className='subheader' id="education">EDUCATION</h3>
        <p>
            Bachelor of Information Technology 2018 - 2020
            <br/>
            UNIVERSITY OF TECHNOLOGY SYDNEY
            <br/><br/><br/><br/>
            Master of Information Technology 2021 - 2022
            <br/>
            UNIVERSITY OF WESTERN AUSTRALIA
        </p>
        <h1>Project Experience</h1>
        <h3 className='subheader' id='decarbonising'>DECARBONISING WASTEWATER TREATMENT WEB APP</h3>
        <h4>August 2022 – October 2022</h4>
        <p>
            This is a full-stack web application developed by a team of 6
            people. It provides interactive web-based visualization of
            sensor data collected from wastewater treatment plants and
            allows researchers to download the data as CSV files or
            images for further analysis.
            I was responsible for creating the data visualization with bar charts
            and unit testing the functions. Tools used: Django
            REST framework, Echart, MySQL, JQuery.
            The application is deployed to AWS via EC2 and S3 and uses
            Git for version control and collaboration.
            In this project, after I completed the features I am going to
            helped the team members complete part of the front-end code
        </p>

        <h3 className='subheader' id='smart reminder'>SMART MEDICATION REMINDER WEB APP</h3>
        <h4>August 2022 – October 2022</h4>
        <p>
            This web app is a smart medication reminder IoT project,
            which aims to remind elderly people to take their medication.
            Tools Used: Django, Django REST, Jinjia, MySQL. It was
            deployed to AWS using Nginx.
            This is a simple little project I did on my own. It completes the
            interaction with the hardware. and all software requirements
            for this IoT project
        </p>

        <h3 className='subheader' id='sokoban'>SOKOBAN FLASK PROJECT</h3>
        <h4>June 2022 - July 2022</h4>
        <p>
            This is a Sokoban web app based on Flask, Jinja, Javascript,
            Ajax and sqlite in a team of 2.
            Developed the user login, register and game ranking features.
            Applied Git for version control and collaboration.
        </p>
        <hr/>
        <h1 id='comment'>Comment</h1>
        <InputBox></InputBox>
        <br/>
        {/*<CommentSection></CommentSection>*/}
    </div>);
}


export default Content;