import React from 'react'

import BadgeItems from './styles/BadgeItems.css'



class BadgeItemList extends React.Component {
    render (){
        return(

        
        <p>
               <div className = "BadgesListItem">
                <img className ="BadgesListItem__avatar" 
                   src = {this.props.badge.avatarUrl}
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
                   
               </p>
        )

    }
}

class BadgeList extends React.Component {

    render(){
        return (

        <div className = " Badges__list">
        <div className = " Badges__container">
        <ul className = "list-unstyled">
                {this.props.badges.map ((badge)=> {
                    return (
                        <li key = {badge.id} >
                            <BadgeItemList badge= {badge}></BadgeItemList>                            
                        </li>

                    )

                })}
            </ul>
        
           
        </div>
    </div>)


    }



}

export default BadgeList   