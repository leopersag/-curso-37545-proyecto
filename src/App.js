import './Estilos.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Provider from './components/Context/Context';
import Cart from './components/Cart/Cart';

function App() {

  return (
        <div className="App"> 
          <Provider>
            <BrowserRouter>
              <Header nombre="Music " apellido="Store" />    
              <Routes>
                  <Route exact path='/' element={<ItemListContainer />}/>
                  <Route exact path='/category/:id' element={<ItemListContainer />}/>
                  <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
                  <Route exact path='/cart' element={<Cart />}/>
              </Routes>
              <Footer ubicacion="Ushuaia" provincia="TDF"/>
            </BrowserRouter>
          </Provider>
        </div>
  );
}

export default App;
