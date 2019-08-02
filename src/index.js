
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
// en este caso quitamos el jsx y utilizamos createElement
//pasamos los argurmentos
//React.createElement (tipo de elemento,{props}, contenido)
const element = React.createElement('a', {href:'https://platzi.com'}, 'Ir a platzi')
const container = document.getElementById ('app')
const name = "Gerson"
//ejemplo con jsx directo
const jsx = <h1>Hola soy,<a href="https://facebook.com">{name}</a>  </h1>
const container2 = document.getElementById ('nombre')

//ReactDOM.render (que vamos a renderizar, donde lo vamos a renderizar)

ReactDOM.render  (element, container);
ReactDOM.render (jsx, container2);

