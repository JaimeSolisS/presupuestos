import axios from "axios";

export const getProducts = async() =>{
    await axios.get(`${process.env.REACT_APP_API}/find-products`);
}

export const getProductsByCategory = async(category) =>{
    await axios.get(`${process.env.REACT_APP_API}/find-products-by-category/${category}`)
}

export const getProductById = async(id) =>{
    await axios.get(`${process.env.REACT_APP_API}/find-product/${id}`)
}

export const createProduct = async(product) =>{
    await axios.post(`${process.env.REACT_APP_API}/create-product`, product);
}

export const updateProduct = async(product) =>{
    await axios.post(`${process.env.REACT_APP_API}/update-product`, product);
}

