import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//funcion mpunt para montar la aplicacion tanto en local como en produccion
const mount = (el) => {
    ReactDOM.render (
        <App /> ,el
    )
};

//para montar local mente
if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_marketing-dev-root");
    if (devRoot){
        mount(devRoot);
    }
}

//para produccion
export {mount}