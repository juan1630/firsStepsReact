import  PropTypes  from "prop-types";
//const newMessage = "Juan";
// es mas optimo de esta forma
// no imprime valores booleanos

//const newMessage = [1,2,3,4,5,6,7];
//No se puedo imprimir un objeto
// No usar funciones asincronas para no generar error en el react, ya que es un objeto una promesa
const saludar = ( ) => 'Hola desde la funcion'

const newMessage = {
    mensaje: 'Hola',
    title: "Adios jeje"
}
//Para renderizar el objeto se hace con el stringify 


export  const FirstApp = ( /* { title  = 'Vegeta' }  valor por defecto*/ {title, subtitle}  ) => {

    return (
         //No es conveniente que se creen un div para agrupar los elmentos del div, porque puede romper el layout de la aplicaicon
        
         //Se recomienda usar el fragment para no hacer mas complejo el elemento
        <>  
            <h1> Hola soy {title} </h1>
            <p> { saludar() } </p>
            <code> { JSON.stringify( newMessage ) } </code> 
            <p> {subtitle} </p>
        </>
    );
}
 // las props son las propiedades que recibe un  componente
 // las prop types  define el tipo a las propiedades del componente

 FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
 }