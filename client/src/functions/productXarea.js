import axios from "axios";
export const createPricePerArea = (price, authtoken) =>{
    return axios.post(`${process.env.REACT_APP_API}/create-price-per-area`, price,{
        headers: {
          authtoken,
        },});
}
export const getPriceAreaByProductId = (prodId) =>{
    return axios.get(`${process.env.REACT_APP_API}/get-price-area-by-productid/${prodId}`)
}