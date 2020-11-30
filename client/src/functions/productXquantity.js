import axios from "axios";
export const createPricePerQuantity = (price) =>{
    return axios.post(`${process.env.REACT_APP_API}/create-price-per-quantity`, price);
}
export const getPriceQuantityByProductId = (prodId) =>{
    return axios.get(`${process.env.REACT_APP_API}/get-price-quantity-by-productid/${prodId}`)
}