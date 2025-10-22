import { useState, useEffect } from "react";
import { ProductHeader, ProductCard } from "@/components/user/ProductSection";
import { Button } from "@/components/ui/button";
import { ProductApi } from "@/apis";

export default function ExploreProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await ProductApi.getPhoneProductApi();

                setProducts(res.data.products.slice(9, 17));
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}

                <ProductHeader title={"Explore Our Products"}>
                    <Button className="rounded bg-red-500 px-8 py-2 font-semibold text-white transition hover:bg-red-600">
                        View All
                    </Button>
                </ProductHeader>

                {/* Products Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.title}
                            image={product.thumbnail}
                            price={product.price}
                            originalPrice={(
                                (product.price * 120) /
                                100
                            ).toFixed(2)}
                            rating={Math.round(product.rating)}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center">
                    <button className="rounded bg-red-500 px-12 py-3 font-semibold text-white transition hover:bg-red-600">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
