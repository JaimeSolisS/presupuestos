import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Budgets = ({ budgets }) => {
  const showOrderInTable = (budget) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Detalles</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio Unitario</th>
          <th scope="col">Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {budget.products.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.product.name}</b>
            </td>
            <td>{p.product.description}</td>
            <td>{p.count}</td>
            <td>${p.price / p.count}</td>
            <td>${p.price}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      {budgets.map((budget) => (
        <div key={budget._id} className="row pb-5">
    
            <div className="row">

              <div className="col-md-8">
             
            </div>
          </div>

          {showOrderInTable(budget)}
        </div>
      ))}
    </>
  );
};

export default Budgets;