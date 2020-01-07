import React from 'react'

import './styles/BadgeList.css'

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

//custom hook

function useSearchBadges (badges){
   
    const [query, setQuery] = React.useState ('')
    

    const [filteredBadges, setFilteredResults]= React.useState (badges)
    React.useMemo (()=>{
         const result=   badges.filter(badge =>{
                return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase())
             });
             setFilteredResults (result)

            },[badges, query])
    return {query, setQuery, filteredBadges}
}




function BadgeList (props) {

    const badges = props.badges

    const {query, setQuery, filteredBadges} = useSearchBadges(badges)
   

        if (filteredBadges.length === 0){
            return (
                
                <div>
                    <div className = "form-group">
                <label>Buscar Badges</label>
            <input  type="text" 
                    className="form-control"
                    value ={query}
                    onChange = {(e)=>{
                        setQuery (e.target.value)
                    }}/>

            </div>
                    <h3>No se ha encontrado ningun badge</h3>
                <Link className="btn btn-primary" to ="/badges/new">Crear</Link>
                </div>

            )
        }
        return (
            <div className = "BadgesList container">
            <div className = "form-group">
                <label>Buscar Badges</label>
            <input  type="text" 
                    className="form-control"
                    value ={query}
                    onChange = {(e)=>{
                        setQuery (e.target.value)
                    }}/>

            </div>
            <ul className = "list-unstyled">
                    {filteredBadges.map (badge => {
                        return (
                            <li key = {badge.id} >
                                <Link 
                                className ="text-reset text-decoration-none"
                                to= {`/badges/${badge.id}`}>
                                    <BadgeItemList badge= {badge}></BadgeItemList>                            
                                </Link>
                            </li>
                        )
                    })}
                </ul>    
        </div>
        )


    }





export default BadgeList   