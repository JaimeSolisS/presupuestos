import axios from "axios";

export const userCart = async (cart, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/user/cart`,{ cart },
    {
      headers: {
        authtoken,
      },
    });
    
export const getUserCart = async (cart, authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`,{ cart },
    {
      headers: {
        authtoken,
      },
    }
  );

  export const getUserBudgets = async ( authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/budgets`,
    {
      headers: {
        authtoken,
      },
    }
  );

