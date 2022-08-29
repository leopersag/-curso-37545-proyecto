import './Estilos.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header nombre="Nico " apellido="Peralta Saggiorato" />
      <h1>Funciona</h1>
      <Footer ubicacion="Ushuaia" provincia="TDF"/>
    </div>
  );
}

export default App;
