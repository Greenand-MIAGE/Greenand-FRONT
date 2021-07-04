import '../App.tsx'
import React from 'react';
import '../../styles/style.css'
import logo from '../../assets/logoVers2.png'
import PopupConnexion from './PopupConnexion';
function Header() {


    return (
        <div className="header">
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <div className="title_card">
                            <h3>Greenand</h3>
                        </div>
                    </div>
                    <p className="navbar-text navbar-right">
                        {<PopupConnexion />}
                    </p>
                </div>
            </nav>
            <img src={logo} alt="logo" className="greenand_logo"></img>
        </div>


    );
}

export default Header
