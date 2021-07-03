import '../App.tsx'
import React  from 'react';
import'../../styles/style.css'
import PopupConnexion from './PopupConnexion';
function Header () {


    return(
        <div className="col-lg-12 col-md-12 col-sm-12">
           <div className="header">
            
               
             <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                           <h1> Greenand</h1>
                               
                    </div>    
                           <p className="navbar-text navbar-right">                          
                           {<PopupConnexion />}
                           </p>
              </div>
          </nav>
          </div>
        </div>

    );
}

export default Header 
