import React from "react";
import {CloseOutlined} from '@ant-design/icons'
import { useDispatch } from "react-redux";

const ProductInCart = ({ p }) => {

    let dispatch = useDispatch();

    const handleRemove = () => {
         // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
    }
  return (
    <tbody>
      <tr>
        <td><img src={p.image} width="100" height="auto"/></td>
        <td>{p.name}</td>
        <td>{p.description}</td>
        <td>{p.cantidad}</td>
        <td>${p.total / p.cantidad}</td>
        <td className='text-center'>
        <CloseOutlined onClick={handleRemove} className='text-danger poiner'>
            
            </CloseOutlined></td>
      </tr>
    </tbody>
  );
};

export default ProductInCart;
