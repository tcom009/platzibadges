import React from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api'


class BadgeNew extends React.Component{
    state = {
      loading :false, 
      error : null, 
        form: {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          twitter: '',
          avatarUrl:'',
        },
      };
    //cambia los valores del Badge en tiempo real mientras llenamos el 
    //formulario
      handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };

      //envia los datos del formularios para que estos sean guardados
      handleSubmit = async e => {
        e.preventDefault ()
        this.setState ({loading: true, error:null})
        this.props.history.push ('/badges')

        try {
          await api.badges.create (this.state.form)
          this.setState ({loading : false })
        }

        catch (error){
          this.setState ({loading:false ,error : error} )
        }

      }



    render (){


      if (this.state.loading){ 
        return <PageLoading/>
      }

        return (
            <React.Fragment>

            <div className="BadgeNew__hero">
                <img className="BadgeNew__hero-image img-fluid"src ={header} alt='logo'/>
            </div>
            <div className ="container">
                <div className="row">
                    <div className="col">
                       
                       
                        <Badge 
                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                lastName = {this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email = {this.state.form.email} 

                />

                    </div>
                <div className = "col-6"> 
                <h1>Nuevo Asistente</h1>
                <BadgeForm
                onChange={this.handleChange}
                onSubmit = {this.handleSubmit}
                formValues={this.state.form}
                error = {this.state.error}
              />
                </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew