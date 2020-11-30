import axios from "axios";
export const createPricePerQuantity = async(price) =>{
    await axios.post(`${process.env.REACT_APP_API}/create-price-per-quantity`, price);
}
export const getPriceQuantityByProductId = async(prodId) =>{
    await axios.get(`${process.env.REACT_APP_API}/get-price-quantity-by-productid/${prodId}`)
}