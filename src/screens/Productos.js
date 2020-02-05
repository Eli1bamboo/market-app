import React from "react";

import Navbar from "../components/Navbar";
import Producto from '../components/Producto'

const Productos = props => {

  return (
    <div>
      <Navbar />
      <div className="products-container">
        <h1 className="products-title">Nuestros Productos</h1>
        <div className="products-list">
          <Producto title="Bolson 5kg Verduras" imgUrl="https://images.unsplash.com/photo-1571051549906-a659836d71f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" />
          <Producto title="Bolson 7kg Verduras" imgUrl="https://images.unsplash.com/photo-1571051549906-a659836d71f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" />
          <Producto title="Bolson 3kg Frutas" imgUrl="https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3104&q=80" />
          <Producto title="Lechuga" imgUrl="https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3925&q=80" />
          <Producto title="Tomate" imgUrl="https://images.unsplash.com/photo-1576982832772-9dc1779033a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3906&q=80" />
          <Producto title="Calabaza" imgUrl="https://images.unsplash.com/photo-1570586437263-ab629fccc818?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80" />
          <Producto title="Cebolla" imgUrl="https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3888&q=80" />
        </div>
      </div>
    </div>
  );
};

export default Productos
