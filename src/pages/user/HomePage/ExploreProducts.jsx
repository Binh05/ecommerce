import { Heart, Eye } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Breed Dry Dog Food",
        price: 100,
        originalPrice: 150,
        discount: -35,
        isNew: false,
        rating: 3,
        reviews: 35,
        image: "/dog-food-bag.jpg",
    },
    {
        id: 2,
        name: "Canon EOS DSLR Camera",
        price: 360,
        originalPrice: 400,
        discount: 0,
        isNew: false,
        rating: 4,
        reviews: 95,
        image: "/canon-dslr-camera-professional.jpg",
    },
    {
        id: 3,
        name: "ASUS FHD Gaming Laptop",
        price: 960,
        originalPrice: 1160,
        discount: -35,
        isNew: false,
        rating: 5,
        reviews: 325,
        image: "/asus-gaming-laptop-red.jpg",
    },
    {
        id: 4,
        name: "Curology Product Set",
        price: 500,
        originalPrice: 600,
        discount: 0,
        isNew: false,
        rating: 4,
        reviews: 145,
        image: "/skincare-product-set-bottles.jpg",
    },
    {
        id: 5,
        name: "Kids Electric Car",
        price: 960,
        originalPrice: 1160,
        discount: 0,
        isNew: true,
        rating: 5,
        reviews: 65,
        image: "/red-kids-electric-car-toy.jpg",
    },
    {
        id: 6,
        name: "Jr. Zoom Soccer Cleats",
        price: 1160,
        originalPrice: 1200,
        discount: 0,
        isNew: false,
        rating: 5,
        reviews: 35,
        image: "/yellow-soccer-cleats-shoes.jpg",
    },
    {
        id: 7,
        name: "GP11 Shooter USB Gamepad",
        price: 660,
        originalPrice: 700,
        discount: 0,
        isNew: false,
        rating: 4,
        reviews: 55,
        image: "/black-gaming-controller-usb.jpg",
    },
    {
        id: 8,
        name: "Quilted Satin Jacket",
        price: 660,
        originalPrice: 700,
        discount: 0,
        isNew: false,
        rating: 4,
        reviews: 55,
        image: "/placeholder.svg?height=250&width=250",
    },
];

export default function ExploreProducts() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-4 rounded bg-red-500"></div>
                        <h2 className="text-2xl font-bold md:text-3xl">
                            Explore Our Products
                        </h2>
                    </div>
                    <button className="rounded bg-red-500 px-8 py-2 font-semibold text-white transition hover:bg-red-600">
                        View All
                    </button>
                </div>

                {/* Products Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative mb-4 aspect-square overflow-hidden rounded bg-gray-100">
                                {product.discount > 0 && (
                                    <div className="absolute top-3 left-3 z-10 rounded bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                                        -{product.discount}%
                                    </div>
                                )}
                                {product.isNew && (
                                    <div className="absolute top-3 left-3 z-10 rounded bg-green-500 px-3 py-1 text-sm font-semibold text-white">
                                        NEW
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
                                {product.originalPrice > product.price && (
                                    <span className="text-gray-400 line-through">
                                        ${product.originalPrice}
                                    </span>
                                )}
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
                <div className="flex justify-center">
                    <button className="rounded bg-red-500 px-12 py-3 font-semibold text-white transition hover:bg-red-600">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
