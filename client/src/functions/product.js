import axios from "axios";

export const getAllProducts = () =>{
    return axios.get(`${process.env.REACT_APP_API}/find-products`);
}

export const getProductsByCategory = (category) =>{
    return axios.get(`${process.env.REACT_APP_API}/find-products-by-category/${category}`)
}

export const getProductById = (id) =>{
    return axios.get(`${process.env.REACT_APP_API}/find-product/${id}`)
}

export const createProduct = (product) =>{
    return axios.post(`${process.env.REACT_APP_API}/create-product`, product);
}

export const updateProduct = (product) =>{
    return axios.post(`${process.env.REACT_APP_API}/update-product`, product);
}

