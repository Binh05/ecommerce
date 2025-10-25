import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/dataContext";
import { ProductCard } from "../ProductSection";

function WlProduct() {
    const [numberPro, setNumberPro] = useState(0);
    const products = useData().slice(0, 8);

    return (
        <section className="mx-auto max-w-7xl px-4 py-20">
            <div className="flex items-center justify-between">
                <p>Wishlist ({products.length})</p>
                <div>
                    <Button className="rounded py-6" size={"lg"}>
                        Move all to cart
                    </Button>
                </div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} trash />
                ))}
            </div>
        </section>
    );
}

export default WlProduct;
