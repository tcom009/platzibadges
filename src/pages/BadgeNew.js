import React from 'react'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    render (){
        return (
            <div>

            <Navbar />
            <div className="BadgeNew__hero">
                <img className="img-fluid"src ={header} alt='logo'/>
            </div>
            <div className ="container">
                <div className="row">
                    <div className="col">
                        <Badge name="Gerson" 
                lastName = "Mayer" 
                instagram="gersonmayer" 
                jobTitle="Engeneer"
                avatar="https://lh3.googleusercontent.com/a-/AAuE7mANQsLaiH0068tLGckWwZys0kFvViZz2Q_atdXTXA=s96"/>

                    </div>
                <div className = "col-6"> 
                    <BadgeForm/>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BadgeNew