import { Route, Routes } from "react-router-dom";
import Home from "@/pages/user/Home";
import Category from "./pages/user/category";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
        </Routes>
    );
}

export default App;
