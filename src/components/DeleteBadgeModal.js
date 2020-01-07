import React from 'react'
import Modal from './Modal'


function DeleteBadgeModal (props){

    return (

    <Modal isOpen={props.isOpen} onClose = {props.onClose}>
    <h1>
        ¿Estas Seguro?
    </h1>
    <p>Estas a punto de eliminar este badge</p>

        <div>
            <button onClick = {props.onDeleteBadge} className="btn btn-danger mr-4">
                Borrar
            </button>
            <button onClick = {props.onClose} className = "btn btn-primary">
                Cancelar
            </button>
        </div>

    
    
        



    </Modal>



    )
    
    
    

}


export default DeleteBadgeModal
