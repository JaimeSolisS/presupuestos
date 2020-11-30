import axios from 'axios'

export const getAllProducts = async() =>
    await axios.get(`${process.env.REACT_APP_API}/find-products/`);