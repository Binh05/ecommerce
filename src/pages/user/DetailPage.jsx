import Layout from "@/layout/Layout";
import DetailProduct from "@/components/user/DetailPage/DetailProduct";
import RelatedProducts from "@/components/user/DetailPage/RelatedProduct";

function DetailPage() {
    return (
        <Layout>
            <DetailProduct />
            <RelatedProducts />
        </Layout>
    );
}

export default DetailPage;
