import axios from "axios";
import "@/apis/mock_phone";

const getPhoneProductApi = async () => {
    return await axios.get("https://dummyjson.com/products/search?q=phone");
};

export const ProductApi = {
    getPhoneProductApi,
};
