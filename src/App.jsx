import React from 'react';
import { Header } from "./componentes/Header/Header";
import { ProductCard } from "./componentes/ProductCard/ProductCard";
//import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
//import "./styles/styles.scss";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  const products = [
    {
      name: "Producto 1",
      price: 19.99,
      imageUrl: "/productOne.jpg",
    },
    {
      name: 'Producto 2',
      price: 29.99,
      imageUrl: "/productTwo.jpg",
    },
  ]

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid gap-4 grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
    </div>
  )
}
export default App
