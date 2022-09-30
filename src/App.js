import './Estilos.css';
import 'core-js/actual';
import Header from './components/Navbar/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Provider from './components/Context/Context';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Checkout/Order';

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
                  <Route exact path='/checkout' element={<Checkout />}/>
                  <Route exact path='/order' element={<Order />}/>
              </Routes>
              <Footer ubicacion="Ushuaia" provincia="TDF"/>
            </BrowserRouter>
          </Provider>
        </div>
  );
}

export default App;
