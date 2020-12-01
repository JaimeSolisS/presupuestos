import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductInCart from '../components/cards/ProductInCart'

const Cart = () => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
   return cart.reduce((currentValue, nextValue) => {
     return currentValue + nextValue.total;
    }, 0);
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Imagen</th>
          <th scope="col">Nombre</th>
          <th scope="col">Detalles</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Remover</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductInCart key={p._id} p={p} />
      ))}

    </table>
  );


  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4>Carrito - {cart.length} Productos</h4>

          {!cart.length ? (
            <p>
              No hay productos en el carrito. <Link to="/">Continuar viendo productos.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        
        </div>
        <div className="col-md-4">
          <h4>Resumen de Orden</h4>
          <hr />
          <p>Productos</p>
          {cart.map((c,i) => (
            <div key={i}>
              <p>{c.name} x {c.cantidad} = ${c.total}</p>
            </div>

          ))}
         
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