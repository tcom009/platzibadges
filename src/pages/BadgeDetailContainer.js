import React from 'react'
import './styles/BadgeDetails.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetail from './BadgeDetail'

class BadgeDetailContainer extends React.Component {


    state ={
        loading : true,
        error : null,
        data:undefined,
        modalIsOpen:false,
    }

    handleOpenModal = e => {
        this.setState ({modalIsOpen:true})
    }

    handleCloseModal = e => {
        this.setState ({modalIsOpen:false})
    }

    handleDeleteBadge = async () =>{
        this.setState ({loading : true, error : null})
        
        try {
            await api.badges.remove (this.props.match.params.badgeId)
            this.props.history.push ("/badges")
        }
        catch (error){
            this.setState ({loading:false, error:error})
        }


    }
    
    componentDidMount (){
        this.fetchData ()
    }


    fetchData = async ()=>{
        
        this.setState ({loading:true, error:null, })
    try {
        const data = await api.badges.read(this.props.match.params.badgeId)
        this.setState ({loading : false, data:data})
    }
    catch (error){
        this.setState ({loading : false, error:error})
    }
}

    render(){
        if (this.state.loading){
            return <PageLoading />
        }
        if (this.state.error){
            return <PageError error = {this.state.error}/>
        }
        //const badge = this.state.data

        return (       
            
            <BadgeDetail 
            onCloseModal= {this.handleCloseModal}
            onOpenModal= {this.handleOpenModal}
            modalIsOpen = {this.state.modalIsOpen} 
            onDeleteBadge = {this.handleDeleteBadge}          
            badge = {this.state.data}/>
        )
    }
}

export default BadgeDetailContainer