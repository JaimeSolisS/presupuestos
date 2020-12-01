import axios from "axios";

export const createBudget = (budget) =>{
    return axios.post(`${process.env.REACT_APP_API}/create-budget`, budget);
}

export const updateBudget = (budget) =>{
    return axios.post(`${process.env.REACT_APP_API}/update-budget`, budget);
}

export const findBudgetById = (id) =>{
    return axios.get(`${process.env.REACT_APP_API}/find-budget-by-id/${id}`);
}

export const findAllBudgets = () =>{
    return axios.get(`${process.env.REACT_APP_API}/find-budgets`);
}

export const findBudgetsByUserId = (userId) =>{
    return axios.get(`${process.env.REACT_APP_API}/find-budgets-by-userid/${userId}`);
}

export const deleteBudget = (budget) =>{
    return axios.delete(`${process.env.REACT_APP_API}/delete-budget`, budget);
}