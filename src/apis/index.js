import axios from "axios";

const getPhoneProductApi = async () => {
    return await axios.get("https://dummyjson.com/products/search?q=phone");
};

export const ProductApi = {
    getPhoneProductApi,
};
