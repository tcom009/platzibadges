
import React from  'react';
//ReactDOM es el analogo de appendChild
import ReactDOM from 'react-dom';
//importamos nuestro badge
import Badge from './components/Badge'
//importamos bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//import Banner from './pages/BadgeNew'
import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'


const badgeNew= <Badges/>


const badge = <Badge 
                name="gerson" 
                lastName = "mayer" 
                instagram="gersonmayer" 
                jobTitle="Engeneer"
                avatar="https://lh3.googleusercontent.com/a-/AAuE7mANQsLaiH0068tLGckWwZys0kFvViZz2Q_atdXTXA=s96"/>

                
const badgeNewContainer = document.getElementById('badgeNew')

ReactDOM.render  (badgeNew, badgeNewContainer);
