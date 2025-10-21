import { ChevronLeft, ChevronRight, Heart, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductApi } from "@/apis/index";

const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        discount: -40,
        rating: 5,
        reviews: 88,
        image: "/red-gaming-gamepad.jpg",
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        discount: -35,
        rating: 4,
        reviews: 75,
        image: "/mechanical-keyboard-rgb.jpg",
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        discount: -30,
        rating: 5,
        reviews: 204,
        image: "/gaming-monitor-curved.jpg",
    },
    {
        id: 4,
        name: "RGB liquid CPU Cooler",
        price: 160,
        originalPrice: 170,
        discount: -40,
        rating: 4,
        reviews: 65,
        image: "/rgb-cpu-cooler-liquid.jpg",
    },
];

export default function FlashSales() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productss, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await ProductApi.getPhoneProductApi();
            setProducts(res.data.products);
            console.log(res.data.products);
        })();
    }, []);

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-4 rounded bg-red-500"></div>
                        <h2 className="text-2xl font-bold md:text-3xl">
                            Flash Sales
                        </h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="rounded p-2 transition hover:bg-gray-100">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="rounded p-2 transition hover:bg-gray-100">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

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
                        <div key={product.id} className="group">
                            <div className="relative mb-4 aspect-square overflow-hidden rounded bg-gray-100">
                                {product.discount && (
                                    <div className="absolute top-3 left-3 z-10 rounded bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                                        {product.discount}%
                                    </div>
                                )}
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
                                    <button className="rounded-full bg-white p-2 transition hover:bg-red-500 hover:text-white">
                                        <Heart size={20} />
                                    </button>
                                    <button className="rounded-full bg-white p-2 transition hover:bg-red-500 hover:text-white">
                                        <Eye size={20} />
                                    </button>
                                </div>
                            </div>
                            <h3 className="mb-2 font-semibold">
                                {product.name}
                            </h3>
                            <div className="mb-2 flex items-center gap-2">
                                <span className="font-bold text-red-500">
                                    ${product.price}
                                </span>
                                <span className="text-gray-400 line-through">
                                    ${product.originalPrice}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                    ({product.reviews})
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-8 flex justify-center">
                    <button className="rounded bg-red-500 px-12 py-3 font-semibold text-white transition hover:bg-red-600">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
