// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import Contact from './contact';

const App = () => {
    return (
        <BrowserRouter>

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
