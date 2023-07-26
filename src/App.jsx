import React from 'react';
import { Header } from "./componentes/Header/Header";
//import { ProductCard } from "./componentes/ProductCard/ProductCard";
//import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
//import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <Header />
      <ItemListContainer />
    </div>
  )
}
export default App
