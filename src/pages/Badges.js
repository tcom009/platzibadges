import React from 'react'
import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'
import {Link} from 'react-router-dom'
import BadgeList from '../components/BadgeList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'


class Badges extends React.Component {


    state = {
    loading:true,
    error : null,
    data: undefined,
}
    
    componentDidMount(){
       this.fetchData ()  

    }

    fetchData = async ()=>{
        this.setState ({loading :true, error :null})

        try {
            const data = await api.badges.list ()
            this.setState ({loading : false, data:data})
        }
        catch(error){
            this.setState ({loading : false, error: error})
        }
    }

   


    render (){

         if (this.state.loading ===  true){
            return (
                
                    <PageLoading></PageLoading>
            )
        }

        if (this.state.error){
            return <PageError error = {this.state.error}/>
            
        }
        
        
        return (
            <div>

                
                <div className = "Badges">
                    <div className ="Badges__hero">
                        <div className= "Badges__container"> 
                        <img className = "Badges_conf-logo" alt = "ConfLogo"src = {confLogo}/>
                        </div>
                    </div>
                </div>
            
            

            <div className = "Badges__container">
               <div className= "Badges__buttons">
                   <Link to="badges/new" className= " btn btn-primary">
                       New Badge
                   </Link>
                   
                   </div> 
            </div>
            <BadgeList badges = {this.state.data}/>
           



            </div>
        )
    }

}

export default Badges;
