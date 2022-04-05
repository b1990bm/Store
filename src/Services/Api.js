import axios from "axios";

export const BASE_URL="https://fakestoreapi.com"

const getProducts=async () =>{
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}

export {getProducts};