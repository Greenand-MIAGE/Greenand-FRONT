import './App.tsx'
import logo from '../assets/logo.jpg'
import'../styles/style.css'


function Header() {
    return(
        <div className="col-lg-12 col-md-12 col-sm-12">
           <div className="header">
             <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                           <h1> Greenand</h1>
                           <img id="logo"  src={logo} className="d-inline-block align-top" alt="greenand" />    
                    </div>    
                           <p className="navbar-text navbar-right">
                           <button className="btn btn-success" id="connex">Connexion</button>
                           </p>
              </div>
          </nav>
          </div>
        </div>

    );
}

export default Header 
