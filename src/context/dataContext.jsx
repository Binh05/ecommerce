import { useState, useEffect, createContext, useContext } from "react";
import { ProductApi } from "@/apis";

const DataContext = createContext(null);

export function DataProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await ProductApi.getPhoneProductApi();

            setData(res.data.products);
        })();
    }, []);
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export const useData = () => {
    return useContext(DataContext);
};
