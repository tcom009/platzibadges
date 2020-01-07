import React from 'react'

import './styles/BadgeItems.css'

import {Link } from 'react-router-dom'

import Gravatar from './Gravatar'


class BadgeItemList extends React.Component {

    render (){
        return(
            <div className = "BadgesListItem">
                <Gravatar className ="BadgesListItem__avatar" 
                   email = {this.props.badge.email}
                   alt = {this.props.badge.firstName}/>
                
                <div>
                      <strong>
                      {this.props.badge.firstName} {this.props.badge.lastName}
                      </strong>   
                      <br/> 
                      <strong> @{this.props.badge.twitter}</strong>
                      <br /> {this.props.badge.jobTitle}
                </div>
               
            </div>
                   
        
        )

    }
}

class BadgeList extends React.Component {

    render(){
        if (this.props.badges.length === 0){
            return (
                <div>
                    <h3>No se ha creado ningun badge</h3>
                <Link className="btn btn-primary" to ="/badges/new">Crear</Link>
                </div>

            )
        }
        return (
            <div className = "BadgesList container">
            
            <ul className = "list-unstyled">
                    {this.props.badges.map (badge => {
                        return (
                            <li key = {badge.id} >
                                <Link 
                                className ="text-reset text-decoration-none"
                                to= {`/badges/${badge.id}`}
                                >
                                    <BadgeItemList badge= {badge}></BadgeItemList>                            
                                </Link>
                            </li>
                        )
                    })}
                </ul>    
        </div>
        )


    }



}

export default BadgeList   