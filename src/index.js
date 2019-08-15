
// // esto es sin usar react
// //creamos un objeto tipo h1
// const element = document.createElement ('h1');
// //añadimos texto al objeto
// element.innerText = 'Hello, Platzi Badges';

// //instanciamos un elemento "contenedor" al que le vamos a pasar nuestro elemento h1
// const container = document.getElementById ('app');

// //llamamos a nuetro container y le pasamos nuestro "element"
// container.appendChild(element);
//React es el analogo a createElement, es necesario siempre que usemos JXS
import React from  'react';
//ReactDOM es el analogo de appendChild
import ReactDOM from 'react-dom';
//importamos nuestro badge
import Badge from './components/Badge'
//importamos bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//import Banner from './pages/BadgeNew'
import BadgeNew from './pages/BadgeNew'
import Navbar from './components/Navbar'
// en este caso quitamos el jsx y utilizamos createElement
//pasamos los argurmentos
//React.createElement (tipo de elemento,{props}, contenido)
//const navbar = <Navbar/>
const badgeNew= <BadgeNew/>
const badge = <Badge 
                name="gerson" 
                lastName = "mayer" 
                instagram="gersonmayer" 
                jobTitle="Engeneer"
                avatar="https://lh3.googleusercontent.com/a-/AAuE7mANQsLaiH0068tLGckWwZys0kFvViZz2Q_atdXTXA=s96"/>


const badgeContainer = document.getElementById('badge')
const badgeNewContainer = document.getElementById('badgeNew')
const navbarContainer = document.getElementById('navbar')


//ReactDOM.render(navbar,navbarContainer)
//ReactDOM.render(badge, badgeContainer)
ReactDOM.render  (badgeNew, badgeNewContainer);
