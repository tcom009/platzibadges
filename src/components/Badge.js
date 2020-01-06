import React from 'react';
import confLogo from '../images/badge-header.svg'
import '../components/styles/Badge.css'
import '../global.css'
import Gravatar from './Gravatar'


class Badge extends React.Component {
    

    render (){
        //this.props
        return(
            <div className="Badge">
                <div  className="Badge__header">
                    <img src={confLogo} alt="Banner"/>
                </div>
                <div className="Badge__section-name">
                    
                    <Gravatar 
                        className ="Badge__avatar"
                        email={this.props.email}
                        alt = {this.props.firstName}
                        />
                        
                    <h1>
                        {this.props.firstName}<br/> {this.props.lastName}
                    </h1>
                </div>
                <div className="Badge__section-info">
                   <h3>{this.props.jobTitle}</h3>
                   <div> @{this.props.twitter}</div>
                </div>
                <div className=" Badge__footer">
                    #platzi
                </div>

            </div>
        )

    }


    

}

export default Badge