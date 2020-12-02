import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { getUserBudgets } from "../../functions/user";
import { useSelector, useDispatch } from "react-redux";


const History = () => {
  const [budgets, setBudgets] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadUserBudgets();
  }, []);

  const loadUserBudgets = () =>
    getUserBudgets(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setBudgets(res.data);
    });
   

  const showBudgetInTable = (budget) => (
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

    const showEachBudget = () =>
    budgets.map((budget, i) => (
      <div key={i} className="m-5 p-3 card">
        {showBudgetInTable(budget)}
        <div className="row">
          <div className="col">
          </div>
        </div>
      </div>
    ));

  return (
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col text-center">
          <h4>
            {budgets.length > 0 ? "Mis presupuestos" : "Sin presupuestos"}
          </h4>
          {showEachBudget()}
        </div>
      </div>
    </div>
  );
};

export default History;