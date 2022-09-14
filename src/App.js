import './Estilos.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
        <div className="App">
          <BrowserRouter>
            <Header nombre="Nico " apellido="Peralta Saggiorato" />    
            <Routes>
                <Route exact path='/' element={<ItemListContainer />}/>
                <Route exact path='/category/:id' element={<ItemListContainer />}/>
                <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
            </Routes>
            <Footer ubicacion="Ushuaia" provincia="TDF"/>
          </BrowserRouter>
        </div>
  );
}

export default App;
