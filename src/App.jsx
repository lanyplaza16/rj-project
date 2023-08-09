import React from 'react';
import { Header } from "./componentes/Header/Header";
//import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
//import { PokeApi } from './componentes/PokeApi/PokeApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './componentes/Footer/Footer';
import { Error404 } from './componentes/Error404/Error404';
import { Contacto } from './componentes/Contacto/Contacto';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={ <ItemListContainer />}/>
      <Route path="/productos/:categoryId" element={ <ItemListContainer />}/>
      <Route path="/detail/:itemId" element={ <ItemDetailContainer />}/>
      <Route path="/contacto" element={ <Contacto />}/>
      {/*<Route path="/pokeapi" element={ <PokeApi /> }/>*/}
      <Route path="*" element={ <Error404 /> }/>
    </Routes>

    <Footer />
  </BrowserRouter>
  )
}
export default App
