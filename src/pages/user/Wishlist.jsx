import RelatedProducts from "@/components/user/DetailPage/RelatedProduct";
import WlProduct from "@/components/user/WishList/Wl-product";
import Layout from "@/layout/Layout";

function WishlistPage() {
    return (
        <Layout>
            <WlProduct />
            <RelatedProducts />
        </Layout>
    );
}

export default WishlistPage;
