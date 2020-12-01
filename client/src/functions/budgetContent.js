import axios from "axios";

export const deleteContent = (content) =>{
    return axios.delete(`${process.env.REACT_APP_API}/delete-content`, content);
}

export const findContentByBudgetId = (budgetId) =>{
    return axios.get(`${process.env.REACT_APP_API}/find-content-by-budgetid/${budgetId}`);
}

export const createContent = (content) =>{
    return axios.post(`${process.env.REACT_APP_API}/create-content`, content);
}