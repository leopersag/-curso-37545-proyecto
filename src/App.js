import './Estilos.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <Header nombre="Nico " apellido="Peralta Saggiorato" />    
      <ItemListContainer categoria= "Guitarras"/>
      <ItemDetailContainer categoria= "Detalle"/>
      <Footer ubicacion="Ushuaia" provincia="TDF"/>
    </div>
  );
}

export default App;
