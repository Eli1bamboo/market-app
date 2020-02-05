import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const clickHandler = () => {
  
}

const Producto = props => {
  return (
    <div className="product-container">
      <div
        className="product-img"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="product-info-container">
        <h3 className="product-title">{props.title}</h3>
        <p className="product-text">{props.info}</p>
        <div className="product-button-container">
          <h3 className="product-more" onClick={()=> {}}>Ver Mas</h3>
          <div className="product-cart-container">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;

// background-image: url(./img/pillow.jpg)
