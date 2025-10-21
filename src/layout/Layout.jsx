import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
