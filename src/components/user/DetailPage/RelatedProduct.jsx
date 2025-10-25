import { useState, useEffect } from "react";
import { ProductCard, ProductHeader } from "@/components/user/ProductSection";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/dataContext";

export default function RelatedProducts({ productId }) {
    const [hoveredId, setHoveredId] = useState();
    const products = useData().slice(0, 4);

    return (
        <section className="py-16">
            <div className="container mx-auto max-w-7xl px-4">
                <ProductHeader title="Related Item" className="mb-12">
                    <Button className="rounded bg-red-500 px-8 py-6 font-semibold text-white transition hover:bg-red-600">
                        View All
                    </Button>
                </ProductHeader>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
