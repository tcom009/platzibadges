import React from 'react'


class BadgeForm extends React.Component {

    handleClick = e=>{
        console.log ("Btn was clicked")
    }


    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    }


    
    render (){
        return (
            <div>
                <h1>Nuevo Asistente</h1>

                <form onSubmit= {this.handleSubmit} >

                    <div  className ="form-group">
                    <label>Nombre</label>
                    <input onChange ={this.props.onChange} 
                            className="form-control"
                            type="text"
                            name="firstName"
                            value= {this.props.formValues.firstName}
                            />
                    </div>

                    <div  className ="form-group">
                    <label>Apellido</label>
                    <input onChange ={this.props.onChange} 
                            className="form-control"
                            type="text"
                            name="lastName"
                            value= {this.props.formValues.lastName}
                            />
                    </div>
                    
                    <div  className ="form-group">
                    <label>Cargo</label>
                    <input onChange ={this.props.onChange} 
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value= {this.props.formValues.jobTitle}
                            />
                    </div>

                    <div  className ="form-group">
                    <label>Email</label>
                    <input onChange ={this.props.onChange} 
                            className="form-control"
                            type="email"
                            name="email"
                            value= {this.props.formValues.email}
                            />
                    </div>

                    <div  className ="form-group">
                    <label>Twitter</label>
                    <input onChange ={this.props.onChange} 
                            className="form-control"
                            type="text"
                            value= {this.props.formValues.twitter}
                            name="twitter"
                            />
                    </div>
                            
                    
                    <button onClick= {this.handleClick} 
                            className="btn btn-success">
                        Crear
                    </button>
                        
                </form>
            </div>
            

        )

    }

}

export default BadgeForm 