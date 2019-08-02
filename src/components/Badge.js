import React from 'react';
import confLogo from '../images/badge-header.svg'



class Badge extends React.Component {
    render (){
        return(
            <div>
                <div>
                    <img src={confLogo} alt="Banner"/>
                </div>
                <div>
                    <img src="" alt="Avatar"/>
                    <h1>
                        Gerson <br/> Mayer
                    </h1>
                </div>
                <div>
                   <p>Desarrollador FullStack junior</p>
                   <p> @gersonmayer</p>
                </div>

            </div>
        )

    }


    

}

export default Badge