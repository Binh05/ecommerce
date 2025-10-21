import { useState, useEffect } from "react";
import { ProductApi } from "@/apis";
import Layout from "@/layout/Layout";
import { ProductCard } from "@/components/user/ProductSection";
import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Chevron } from "@/components/ui/chevron";

function AllProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await ProductApi.getPhoneProductApi();
                setProducts(res.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <Layout>
            <section className="py-20">
                {/* sort */}
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex justify-between bg-gray-100 px-4 py-4">
                        <div className="flex items-center gap-4">
                            <p>Sắp xếp theo</p>
                            <Button>Liên quan</Button>
                            <Button className="bg-white text-black">
                                Mới nhất
                            </Button>
                            <Button className="bg-white text-black">
                                Bán chạy{" "}
                            </Button>
                        </div>
                        <Chevron className="bg-white" />
                    </div>
                </div>

                {/* Products */}
                <div className="mx-auto mt-4 max-w-7xl px-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {products?.map((product) => (
                            <ProductCard
                                key={product.id}
                                discount={40}
                                name={product.title}
                                image={product.thumbnail}
                                price={product.price}
                                originalPrice={(
                                    (product.price * 140) /
                                    100
                                ).toFixed(2)}
                                rating={Math.round(product.rating)}
                            />
                        ))}
                    </div>
                </div>
                <PanigationComp className="mt-12" />
            </section>
        </Layout>
    );
}

function PanigationComp({ className }) {
    return (
        <Pagination className={className}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default AllProduct;
