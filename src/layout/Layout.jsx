import { Link } from "react-router-dom";
import Header from "@/layout/Header";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer></footer>
        </>
    );
}

export default Layout;
