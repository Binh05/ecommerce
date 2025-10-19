import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
