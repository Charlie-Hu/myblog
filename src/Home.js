import React from 'react';
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Content from "./component/Content/Content";
import "./Home.css"

function App(props) {
    return (
        <div className='wholeApp'>
            <div className='topside'>
                <Header></Header>
            </div>
            <div className='container'>

                <div className='container-left'>
                    <Sidebar></Sidebar>
                </div>

                <div className='container-right'>
                    <Content></Content>
                </div>

            </div>
        </div>
    );
}

export default App;