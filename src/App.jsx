import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/pages/user/Home";
import Dashboard from "@/pages/admin/Dashboard";
import Products from "@/pages/admin/Products";
import Orders from "@/pages/admin/Orders";
import AdminLayout from "@/pages/admin/AdminLayout";
import AllProduct from "./pages/user/AllProduct";

function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/admin/Dashboard" replace />} /> */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Products" element={<Products />} />
                <Route path="Orders" element={<Orders />} />
                <Route path="Customers" element={<div>Khách hàng</div>} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/a-p" element={<AllProduct />} />
        </Routes>
    );
}

export default App;
