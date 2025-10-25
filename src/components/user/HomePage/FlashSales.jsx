import { useData } from "@/context/dataContext";
import { Link } from "react-router-dom";
import { ProductHeader, ProductCard } from "@/components/user/ProductSection";
import { Chevron } from "@/components/ui/chevron";

export default function FlashSales() {
    const products = useData().slice(0, 4);

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <ProductHeader title={"Flash Sales"} chevron={true}>
                    <Chevron />
                </ProductHeader>

                {/* Countdown Timer */}
                <div className="mb-8 flex items-center gap-4">
                    <span className="text-gray-600">Ends in:</span>
                    <div className="flex gap-2">
                        {["03", "23", "19", "56"].map((num, idx) => (
                            <div
                                key={idx}
                                className="rounded bg-gray-100 px-4 py-2 text-center font-bold"
                            >
                                {num}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
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

                {/* View All Button */}
                <div className="mt-8 flex justify-center">
                    <Link
                        to={"/a-p"}
                        className="rounded bg-red-500 px-12 py-3 font-semibold text-white transition hover:bg-red-600"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
