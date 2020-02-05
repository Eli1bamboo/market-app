import React from "react";

const Productos = props => {
  return (
    <div className="product-container">
      <div className="product-img" style={{ backgroundImage: `url(${props.imgUrl})`  }}>
        <h3 className="product-title">{props.title}</h3>
      </div>
    </div>
  );
};

export default Productos;

// background-image: url(./img/pillow.jpg)
