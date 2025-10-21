import { Heart, Eye } from "lucide-react";

const products = [
    {
        id: 1,
        name: "The north coat",
        price: 260,
        originalPrice: 360,
        rating: 5,
        reviews: 88,
        image: "/pink-jacket-coat.jpg",
    },
    {
        id: 2,
        name: "Gucci duffle bag",
        price: 960,
        originalPrice: 1160,
        rating: 5,
        reviews: 88,
        image: "/gucci-duffle-bag-brown.jpg",
    },
    {
        id: 3,
        name: "RGB liquid CPU Cooler",
        price: 160,
        originalPrice: 170,
        rating: 5,
        reviews: 88,
        image: "/rgb-cooler-colorful.jpg",
    },
    {
        id: 4,
        name: "Small BookSelf",
        price: 360,
        originalPrice: 400,
        rating: 5,
        reviews: 88,
        image: "/wooden-bookshelf-furniture.jpg",
    },
];

export default function BestSelling() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-4 rounded bg-red-500"></div>
                        <h2 className="text-2xl font-bold md:text-3xl">
                            Best Selling Products
                        </h2>
                    </div>
                    <button className="rounded bg-red-500 px-8 py-2 font-semibold text-white transition hover:bg-red-600">
                        View All
                    </button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative mb-4 aspect-square overflow-hidden rounded bg-gray-100">
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
            </div>
        </section>
    );
}
