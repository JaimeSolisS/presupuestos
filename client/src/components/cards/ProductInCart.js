import React from "react";

const ProductInCart = ({ p }) => {
  return (
    <tbody>
      <tr>
        <td><img src={p.image} width="100" height="auto"/></td>
        <td>{p.name}</td>
        <td>{p.description}</td>
        <td>{p.cantidad}</td>
        <td>${p.total / p.cantidad}</td>
        <td>Delete Icon</td>
      </tr>
    </tbody>
  );
};

export default ProductInCart;
