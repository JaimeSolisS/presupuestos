import axios from "axios";

export const getBudgets = async(authtoken) =>
    await axios.get(`${process.env.REACT_APP_API}/admin/budgets`, {
        headers: {
            authtoken,
        },
    });