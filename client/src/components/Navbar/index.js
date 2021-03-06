import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';
import logoCrop from '../../assets/logoCrop.png';
import API from '../../utils/API'

export default function Navbar() {

    function logout(e) {
        e.preventDefault()
        API.logout().then(() => {
            window.location = "landing.html"
        })
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    {/* <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
        <img src="Assets/images/king_logo.png" alt=""> */}
                    {/* <img src={logoCrop} className="navbar-brand" alt="monnaie logo"></img> */}
                    {/* <a href="/" className="navbar-brand">Monnaie</a> */}
                </div>
                <button data-target="#main-menu" data-toggle="collapse" className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="main-menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item" ><a href="/Profile" className="nav-link">Your Profile</a></li>
                        <li className="nav-item"><Link to="/Community" className="nav-link">Community</Link></li>
                        <li className="nav-item"><Link to="/Task" className="nav-link">Task</Link></li>
                        <li className="nav-item"><Link to="/Budget" className="nav-link">Budget</Link></li>
                       
                    </ul>
                    <span className="nav-left" > <a onClick={logout} href="" className="nav-link">Logout</a>  </span>
                </div>
            </div>
        </nav>
        </div>
    );
}