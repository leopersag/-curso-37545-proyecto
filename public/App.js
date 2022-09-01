

//  ------------------------------------------------------- CLASE 3

// import logo from './logo.svg';
import './App.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import Titulo from './components/Titulo';
//import Input from './components/Input'; 

function App() {
 
  console.log(Array.from(new Set([1,2,3,3,2]))); //el elemento "SET" toma solo valores únicos

  console.log([1,[2,3],[4,[5]]]); // Array con arrays adentro, genera diferentes niveles de array
  console.log([1,[2,3],[4,[5]]].flat(3)); // la funcion 'flat' pone los array hasta el nivel indicado en un solo nivel
  console.log([1,[2,3],[4,[5]]].flat(1));
 

  const productos =[
    {id:1, nombre:"Coca cola", precio: "200"},
    {id:2, nombre:"Pepsi", precio: "190"},
    {id:3, nombre:"Fernet", precio: "1400"},
    {id:4, nombre:"Rutini", precio: "2000"}
  ];

  const lista = ["Desarrollo web", "JS", "React JS"];
  const Items = lista.map (items => (
    <Item valor={items} />
  ));

  return (
    <div className="container text-center">
      <Header curso="Nico " tipo="Peralta Saggiorato" />
      <Titulo valor="Cursos de Coderhouse"/>
      <ul>
        {Items}
      </ul>
      <h3>Productos</h3>
      <ul>
      {
        productos.map(item=> (
          <li key={item.id}>{item.nombre} - ${item.precio}</li>
        )
          )
      }
      </ul>

      <div className="row align-items-center">
          <img className="col-3 bg-light p-3 border" id="Nico_foto" src="./media/IMG_9357.jpg" alt="Nico"/>
          <div className="col">
              <p>Nicolas Peralta Saggiorato, nacido en Ushuaia y radicado en Cordoba, artista de la escena local que lanza su carrera en solitario en 2018 con un nuevo álbum titulado <a href="./discografia.html#Disco1">'A Medio Mundo De Distancia'</a>  donde la canción se realza por su esencia para luego dar forma que va desde el rock de vieja escuela hasta una faceta electrónica vanguardista. </p> 
              <p>En 2020 Lanza un segundo álbum titulado <a href="./discografia.html#Disco2">'Tiempo Maestro'</a>, siendo este un nuevo concepto de la canción acústica con una instrumentación minimalista de cuerdas, sintetizadores y percusión principalmente de madera en un estilo que va desde el jazz, folk, música afroamericana y centroamericana.</p>
          </div>
      </div>

      <h4 className="row justify-content-md-center">Ultimos lanzamientos</h4>

      <div className="row">

          <div className="col">
              <h6>Al inevitable mundo de los sueños</h6>
              <iframe src="https://www.youtube.com/embed/RKofTBeWz94" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
  
          <div className="col">
              <h6>Muralla virtual</h6>
              <iframe src="https://www.youtube.com/embed/ne_NFmO1qRs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          
      </div>  

      <Footer ubicacion="Ushuaia" provincia="TDF"/>
    </div>   
  );
}


export default App;

// ------------------------------------------------------- FIN CLASE 3

// ------------------------------------------------------- CLASE 4
/* 
  import React  from "react";

  const SuperForm = (props) => {
    return(
      <div>
        <h1>{props.titulo} estamos cursando {props.curso}</h1>
        {props.render({textoBoton: "Haceme Click aca!"})}
      </div>
    )
  }

  const SuperButton = ({textoBoton}) => {
    const HacerClick = () => {
      console.log("Hola Coders!");
    }
    return (
      <div onClick= {HacerClick}>
        <input type="button" value={textoBoton} />
      </div>
    )
  }

  function App () {
    return(
      <SuperForm titulo="Hola Coders!" curso="React JS" render={SuperButton} />
    )
  }

  export default App; */

/* 
  // Estado/State basado en Clases
  import React, {Component} from "react";

  class App  extends Component{
    constructor() {
      super(); //esto es para que funcione, tiene que ir si o si
      this.state ={
        curso:"React JS",
        lugar:"Coderhouse"
      }
    }

    actualizarNombre = () => {
      this.setState(
        {curso:"Javascript"}
      )
    }

    render() {
      return(
        <div onClick={this.actualizarNombre}>
          <h1>Bienvenidos al Curso de {this.state.curso} en {this.state.lugar}</h1>
        </div>
      )
    }
  }

  export default App; 
*/

/* 
  // Estado/State basado en funciones

  import React, { useState } from "react";

  const App = () => {
    const [curso, setCurso] = useState("Javascript CH");
    const [lugar, setLugar] = useState("Ushuaia");
    return (
      <div onClick={() => {
        setCurso("React JS");
        setLugar("Rio Grande");
      
      }
      }>
        <h1>Bienvenidos al Curso de {curso} en {lugar}</h1>
      </div>
    
      )
  }

  export default App;
 */

/* 
// Ejemplo de clase
import * as React from 'react';

export default function App() {
  const [clicks, setClicks] = React.useState(0);
  const [fecha, setFecha] = React.useState(new Date());
  return (
    <div onClick = {
      () =>{
        setClicks(clicks + 1);
        setFecha(new Date());
      }
    }>
      <h1>Contacto de Clicks</h1>
      <p>Clicks: {clicks} - Fecha {fecha.getDate()}/{fecha.getMonth()+1}/{fecha.getFullYear()} {fecha.getHours()}:{fecha.getMinutes()}:{fecha.getSeconds()} </p>
    </div>
  );
}
 */

/* 
import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";

const App = () => {
  const [curso, setCurso] = useState("Javascript CH");
  const [clicks, setClicks] = useState(0);
  useEffect(() =>{
    console.log("2 - Componenete Montado");
    setCurso("Otro curso");
    document.title="Clicks: "+ clicks + " en " + curso;
    return(() => {
      console.log("3 - Componente Desmontado")
    });
    
  },[clicks]);
  console.log("1 - Lo que se va a renderizar");
  return (
    <div onClick={() => {
      setCurso("React JS");    
      setClicks(clicks + 1);
     }
    }>
      <h1>Bienvenidos al Curso de {curso}</h1>
      <p>Clicks: {clicks}</p>
    </div>
  
    )
}

export default App;
 */

// ------------------------------------------------------- FIN CLASE 4