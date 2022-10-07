import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
import './index.css';
import { sidebarBtnFunc } from './sidebarBtnFunc.js';

class App extends React.Component{
render() {
    return(
        <header>
            <nav>
                <div className="sidebar">
                    <p>sidebar</p>
                    <ul>
                        <li> lorem ipsume</li>
                        <li> lorem ipsume</li>
                        <li> lorem ipsume</li>
                        <li> lorem ipsume</li>
                    </ul>
                </div>
                <button className="sidebarStatusBtn" data-status="off" onClick={() =>{sidebarBtnFunc()}}>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDMgNyBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMyA5IEwgMjcgOSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMjcgNyBMIDMgNyB6IE0gMyAxNCBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMyAxNiBMIDI3IDE2IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNyAxNCBMIDMgMTQgeiBNIDMgMjEgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDMgMjMgTCAyNyAyMyBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMjcgMjEgTCAzIDIxIHoiPjwvcGF0aD48L3N2Zz4="/>
                </button>
            </nav>
    </header>
    );
}
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);