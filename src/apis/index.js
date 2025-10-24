import axios from "axios";
import "@/apis/mock_phone"; 
import orders from "./mock_orders"; 
import customers from "./mock_customers";

const getPhoneProductApi = async () => {
    return await axios.get("https://dummyjson.com/products/search?q=phone");
};

const getOrdersApi = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: orders });
        }, 500);
    });
};
const getCustomersApi = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: customers });
        }, 500);
    });
};
export const ProductApi = {
    getPhoneProductApi,
};

export const OrderApi = {
    getOrdersApi,
};
export const CustomerApi = {
    getCustomersApi,
};
