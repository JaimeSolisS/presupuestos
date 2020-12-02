import React, { useState, useEffect } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getBudgets } from "../../functions/admin";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Budgets from "../../components/Budgets";

const AdminDashboard = () => {
  const [budgets, setBudgets] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadBudgets();
  }, []);

  const loadBudgets = () =>
    getBudgets(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setBudgets(res.data);
    });


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col text-cente">
          <h4>Admin Dashboard</h4>
          {/* {JSON.stringify(orders)} */}
          <Budgets budgets={budgets}  />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;