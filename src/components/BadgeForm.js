import React from 'react'


class BadgeForm extends React.Component {
    state = {
        name:'',
        lastName:'',
        jobTitle:'',
        email:'',
        twitter:'',
    };
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value

        })
    };



    handleClick = (e)=>{
        //evitamos que el formulario se envie con preventDefault()
        e.preventDefault();
        console.log ("Btn was clicked")
        console.log (this.state)
    };


    render (){
        return (
            <div>
                <h1>Nuevo Asistente</h1>

                <form onSubmit= {this.handleClick} >

                    <div  className ="form-group">
                    <label>Nombre</label>
                    <input onChange ={this.handleChange} 
                            className="form-control"
                            type="text"
                            name="name"
                            value= {this.state.name}
                            />
                    </div>

                    <div  className ="form-group">
                    <label>Apellido</label>
                    <input onChange ={this.handleChange} 
                            className="form-control"
                            type="text"
                            name="lastName"
                            value= {this.state.lastName}
                            />
                    </div>
                    
                    <div  className ="form-group">
                    <label>Cargo</label>
                    <input onChange ={this.handleChange} 
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value= {this.state.jobTitle}
                            />
                    </div>

                    <div  className ="form-group">
                    <label>Email</label>
                    <input onChange ={this.handleChange} 
                            className="form-control"
                            type="email"
                            name="email"
                            value= {this.state.email}
                            />
                    </div>

                    <div  className ="form-group">
                    <label>Twitter</label>
                    <input onChange ={this.handleChange} 
                            className="form-control"
                            type="text"
                            value= {this.state.twitter}
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