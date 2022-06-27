import React from 'react';
import  ReactDOM  from 'react-dom/client';

//import  { App }  from  './HelloWorldApp'
import App  from './HelloWorldApp';
import {FirstApp} from './firstAppComponent';

//importamos los estilos globales

import './styles.css';
ReactDOM.createRoot(  document.getElementById('root') ).render(
    <React.StrictMode>
        <App/>
        <FirstApp    title="Hello World"  subtitle={123}  /*  title  asi se manda un true de forma corta*/  /*title="Hola soy Goku"  subtitle={123} */ /* paso de parametros del tipo numero */ />
    </React.StrictMode>
);