
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
//el siguiente h1 es JSX 
const element = <h1> Hello, Platzi Badges, from react</h1>;
const container = document.getElementById ('app')

//ReactDOM.render (que vamos a renderizar, donde lo vamos a renderizar)

ReactDOM.render  (element, container);


