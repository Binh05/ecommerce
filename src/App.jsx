import { Route, Routes } from "react-router-dom";
import Home from "@/pages/user/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default App;
