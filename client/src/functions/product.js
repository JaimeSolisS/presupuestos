import axios from "axios";

export const getAllProducts = () => {
    return axios.get(`${process.env.REACT_APP_API}/find-products`);
}

export const getProductsByCategory = (category) => {
    return axios.get(`${process.env.REACT_APP_API}/find-products-by-category/${category}`)
}

export const getProductById = (id) => {
    return axios.get(`${process.env.REACT_APP_API}/find-product/${id}`)
}

export const createProduct = (product, authtoken) => {
    return axios.post(`${process.env.REACT_APP_API}/create-product`, product,{
        headers: {
          authtoken,
        },})
}

export const updateProduct = (product, authtoken) => {
    return axios.post(`${process.env.REACT_APP_API}/update-product`, product,{
        headers: {
          authtoken,
        },})
}