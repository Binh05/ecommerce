import { Heart, ShoppingCart, Truck, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import Quantity from "../Quantity";

function ProductInfo({ productId }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("white");
    const [selectedSize, setSelectedSize] = useState("M");

    const product = {
        id: productId,
        name: "Havic HV-G92 Gamepad",
        price: 192,
        originalPrice: 260,
        rating: 5,
        reviews: 160,
        description:
            "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        colors: ["white", "pink"],
        sizes: ["XS", "S", "M", "L", "XL"],
        images: [
            "/gaming-controller-1.jpg",
            "/gaming-controller-2.jpg",
            "/gaming-controller-3.jpg",
            "/gaming-controller-4.jpg",
        ],
    };

    return (
        <div className="col-span-2 max-w-[25rem]">
            <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>

            {/* Rating */}
            <div className="mb-6 flex items-center gap-4">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg text-yellow-400">
                            ★
                        </span>
                    ))}
                </div>
                <span className="text-muted-foreground">
                    ({product.reviews} Reviews)
                </span>
                <div className="h-5 w-[0.1rem] bg-black"></div>
                <span className="font-semibold text-green-500">In Stock</span>
            </div>

            {/* Price */}
            <div className="border-border mb-6 flex items-center gap-4 border-b pb-6">
                <span className="text-primary text-3xl font-bold">
                    ${product.price}.00
                </span>
                <span className="text-muted-foreground text-xl line-through">
                    ${product.originalPrice}
                </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Colors */}
            <div className="mb-6 flex items-center gap-4">
                <p className="mb-3 font-semibold">Colours:</p>
                <div className="flex gap-3">
                    {product.colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`h-8 w-8 rounded-full border-2 transition-all ${
                                selectedColor === color
                                    ? "border-primary"
                                    : "border-border"
                            } ${color === "white" ? "bg-white" : "bg-pink-400"}`}
                        />
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div className="mb-6 flex items-center gap-4">
                <p className="mb-3 font-semibold">Size:</p>
                <div className="flex gap-3">
                    {product.sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`rounded border px-4 py-2 transition-all ${
                                selectedSize === size
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "border-border hover:border-primary"
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-6 flex gap-4">
                <Quantity quantity={quantity} setQuantity={setQuantity} />
                <Button className="w-40 py-5">
                    <ShoppingCart size={20} />
                    Buy Now
                </Button>
                <Toggle className="hover:bg-secondary rounded-lg border px-6 py-5 transition-colors data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500">
                    <Heart className="!h-5 !w-5" />
                </Toggle>
            </div>

            {/* Delivery Info */}
            <div className="border-border space-y-4 border-t pt-6">
                <div className="flex gap-4">
                    <Truck className="text-primary flex-shrink-0" size={24} />
                    <div>
                        <p className="font-semibold">Free Delivery</p>
                        <p className="text-muted-foreground text-sm">
                            Enter your postal code for Delivery Availability
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <RotateCcw
                        className="text-primary flex-shrink-0"
                        size={24}
                    />
                    <div>
                        <p className="font-semibold">Return Delivery</p>
                        <p className="text-muted-foreground text-sm">
                            Free 30 Days Delivery Returns. Details
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
