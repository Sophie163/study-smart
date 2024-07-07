import React from 'react-bootstrap'; 
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
function Navbar() {   
    return (  
        <><nav class="navbar navbar-expand-sm navbar-dark bg-mydarkgreen fixed-top">
            <div class="container-fluid">                
                <a class="navbar-brand text-mylightgreen mx-2" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-journal-bookmark me-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                </svg>
                Study Smart
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <form class="d-flex">
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link px-3" href="https://sophie163.github.io/study-smart/#/Tutors">Tutors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3" href="https://sophie163.github.io/study-smart/#/Messages">Messages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3" href="/Planner">Planner</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3" href="/Timer">Timer</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pl-3" href="/SignIn">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </nav></>   
    ); 
} 

export default Navbar;