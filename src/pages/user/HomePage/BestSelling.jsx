import { useState, useEffect } from "react";
import { ProductApi } from "@/apis";
import { ProductHeader, ProductCard } from "@/components/user/ProductSection";
import { Button } from "@/components/ui/button";

export default function BestSelling() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await ProductApi.getPhoneProductApi();
            setProducts(res.data.products.slice(5, 9));
        })();
    }, []);

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <ProductHeader title={"Best Selling Products"}>
                    <Button className="rounded bg-red-500 px-8 py-2 font-semibold text-white transition hover:bg-red-600">
                        View All
                    </Button>
                </ProductHeader>

                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.title}
                            image={product.thumbnail}
                            price={product.price}
                            rating={Math.round(product.rating)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
