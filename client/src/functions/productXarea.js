import axios from "axios";
export const createPricePerArea = async(price) =>{
    await axios.post(`${process.env.REACT_APP_API}/create-price-per-area`, price);
}
export const getPriceQuantityByProductId = async(prodId) =>{
    await axios.get(`${process.env.REACT_APP_API}/get-price-area-by-productid/${prodId}`)
}