import './Estilos.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const productos =[
    {id:1, marca: "PRS", nombre:"Custom 24", precio: "3200", img: "../media/Custom24.jpg"},
    {id:2, marca: "Gibson", nombre:"Les Paul", precio: "3000", img: "../media/LesPaul.jpg"},
    {id:3, marca: "Ibanez", nombre:"JS1000", precio: "3150", img: "../media/JS1000.jpg"},
    {id:4, marca: "Fender", nombre:"Stratocaster", precio: "2200", img: "../media/Stratocaster.jpg"},
];


  return (
    <div className="App">
      <Header nombre="Nico " apellido="Peralta Saggiorato" />    
      <ItemListContainer categoria= "Guitarras Eléctricas" items={productos}/>
      <Footer ubicacion="Ushuaia" provincia="TDF"/>
    </div>
  );
}

export default App;
