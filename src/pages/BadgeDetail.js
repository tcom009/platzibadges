import React from 'react'
import confLogo from '../images/platziconf-logo.svg'
import  {Link} from 'react-router-dom'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'


function BadgeDetails (props){
    const badge= props.badge

    return (
    <div>
                <div className="BadgeDetails__hero"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <img src={confLogo} alt= "Platzi"/>    
                            </div>

                            <div className="BadgeDetails__hero-attendant-name col-6">
                            <h1> {badge.firstName} {badge.lastName}</h1> 


                            </div>
                        </div>
                    </div>
                    </div>
                    <div className= "container">
                        <div className="row">
                            <div className = "col-6">
                                <Badge firstName={badge.firstName}
                                       lastName={badge.lastName}
                                       email={badge.email}
                                       twitter = {badge.twitter}
                                       jobTitle = {badge.jobTitle}/>
                            </div>
                            <div className = "col-6">
                               <h2>Acciones</h2> 

                                <div>
                                    <Link className="btn btn-primary mb-4" 
                                    to = {`/badges/${badge.id}/edit`}> 
                                    Editar
                                    </Link>
                                </div>

                                <div>
                                    <button onClick ={props.onOpenModal} 
                                            className= "btn btn-danger ">
                                        Eliminar
                                    </button> 

                                    <DeleteBadgeModal  isOpen={props.modalIsOpen} 
                                            onClose={props.onCloseModal}
                                            onDeleteBadge = {props.onDeleteBadge}/> 
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
         
)

}

export default BadgeDetails