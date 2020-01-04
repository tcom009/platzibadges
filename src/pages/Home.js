import React from 'react'
import astronauts from '../images/astronauts.svg'

import platziLogo from '../images/platziconf-logo.svg'
import './styles/Home.css'
import {Link} from 'react-router-dom'


function Home  () {
return (
    <React.Fragment>
    <div className= "Home">
    <div className= "container">  
    <div className = "row">

            <div className = "Home__col col-12 col-md-4">
            <img src = {platziLogo} 
            alt ="Platzi" />
            
            <br /> 
            <h1 >
                Imprime tus 
            credenciales
            </h1>
            <Link to ="/badges" className="btn btn-primary"> Iniciar</Link>
            </div>
            <div className= "Home__col col-12 col-md-4">    
            <img src = {astronauts}
            alt = "Logo"/>
            </div>
    </div>
    </div>
    </div>

    </React.Fragment>

)

}

export default Home 