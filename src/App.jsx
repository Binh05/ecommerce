import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/pages/user/HomePage/Home";
import Category from "@/pages/user/HomePage/category";
import Dashboard from "@/pages/admin/Dashboard";
import AdminLayout from "@/pages/admin/AdminLayout";



function App() {
    return (
        <Routes>

            {/* <Route path="/" element={<Navigate to="/admin/Dashboard" replace />} /> */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />    
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Products" element={<div>Sản phẩm</div>} />
                <Route path="Orders" element={<div>Đơn hàng</div>} />
                <Route path="Customers" element={<div>Khách hàng</div>} />
            </Route>

            
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />

        </Routes>
    );
}

export default App;
