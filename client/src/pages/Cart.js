import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
   // return cart.reduce((currentValue, nextValue) => {
     // return currentValue + nextValue.count * nextValue.price;
    //}, 0);
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Imagen</th>
          <th scope="col">Detalles</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Agregar a presupuesto?</th>
          <th scope="col">Remover</th>
        </tr>
      </thead>

    </table>
  );


  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4>Carrito - # Productos</h4>

          {cart ? (
            <p>
              No products in cart. <Link to="/shop">Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}

          Necesito el carrito en redux y crear componente para renderearlo aqui
        
        </div>
        <div className="col-md-4">
          <h4>Resumen de Orden</h4>
          <hr />
          <p>Productos</p>
         
          <hr />
          Total: <b>${getTotal()}</b>
          <hr />
          {user ? (
            <button className="btn btn-sm btn-primary mt-2">
              Crear presupuesto
            </button>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
                <Link
                to= {{
                    pathname: '/login', 
                    state: {from: 'cart'}, 
                }}>
                Inicia sesión para hacer el presupuesto
                </Link>
          
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;