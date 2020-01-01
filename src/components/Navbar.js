import React from 'react';
import confLogo from '../images/badge-header.svg'
import '../components/styles/Navbar.css'
import '../global.css'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render (){
        
        return(
            <div className="Navbar">
                <div className="container-fluid">

                <Link className="Navbar__brand " to="">
                <img className="Navbar__brand-logo" src={confLogo} alt ="Platzi Conf"/>
                <span className="font-weight-light">Platzi</span>
                <span className="font-weight-bold">Conf</span>
                </Link>     
                </div>
            </div>       
        )
    }
}

export default Navbar