import { Route, Routes } from "react-router-dom";
import Home from "@/pages/user/HomePage/Home";
import Category from "@/pages/user/HomePage/Home";
import AdminHome from "./pages/admin/AdminHome";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/admin" element={<AdminHome />} />
        </Routes>
    );
}

export default App;
