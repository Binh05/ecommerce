import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
