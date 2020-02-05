import React from "react";
import imagen from "../assets/img/frutas.jpg";

import Navbar from "../components/Navbar";
import Producto from "../components/Producto";

const Productos = props => {
  return (
    <div>
      <Navbar />
      <div className="products-container">
        <img className="products-image" src={imagen} alt="Imagen de frutas" />
        <h1 className="products-title">Productos</h1>
        <div className="products-list">
          <Producto
            title="Bolson 5kg Verduras"
            image="https://images.unsplash.com/photo-1571051549906-a659836d71f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"
            info="Bolson surtido de 5kg de verduras agroecologicas."
          />
          <Producto
            title="Bolson 7kg Verduras"
            image="https://images.unsplash.com/photo-1571051549906-a659836d71f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"
            info="Bolson surtido de 5kg de verduras agroecologicas."
          />
          <Producto
            title="Bolson 3kg Frutas"
            image="https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3104&q=80"
            info="Bolson surtido de 5kg de verduras agroecologicas."
          />
          <Producto
            title="Lechuga"
            image="https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3925&q=80"
            info="Bolson surtido de 5kg de verduras agroecologicas."
          />
          <Producto
            title="Tomate"
            image="https://images.unsplash.com/photo-1576982832772-9dc1779033a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3906&q=80"
            info="Bolson surtido de 5kg de verduras agroecologicas."
          />
          <Producto
            title="Calabaza"
            image="https://images.unsplash.com/photo-1570586437263-ab629fccc818?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80"
            info="Bolson surtido de 5kg de verduras agroecologicas."
          />
          <Producto
            title="Cebolla"
            image="https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3888&q=80"
            info="Bolson surtido de 5kg de verduras agroecologicas."
          />
        </div>
      </div>
    </div>
  );
};

export default Productos;
