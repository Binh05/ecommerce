import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/pages/user/Home";
import Dashboard from "@/pages/admin/Dashboard";
import Products from "@/pages/admin/Products";
import Orders from "@/pages/admin/Orders";
import Customers from "@/pages/admin/Customers";
import AdminLayout from "@/pages/admin/AdminLayout";
import AllProduct from "@/pages/user/AllProduct";
import DetailPage from "@/pages/user/DetailPage";
import CartPage from "@/pages/user/CartPage";
import WishlistPage from "@/pages/user/Wishlist";
import ProfilePage from "@/pages/user/ProfilePage";

function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/admin/Dashboard" replace />} /> */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Products" element={<Products />} />
                <Route path="Orders" element={<Orders />} />
                <Route path="Customers" element={<Customers />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/a-p" element={<AllProduct />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/w-l" element={<WishlistPage />} />
            <Route path="/account/profile" element={<ProfilePage />} />
        </Routes>
    );
}

export default App;
