import ProductInfo from "./ProductInfo";
import ImgBtnSlider from "./ImgBtnSlider";

function DetailProduct({ productId }) {
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
        <section className="py-12">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Breadcrumb */}
                <div className="text-muted-foreground mb-8 flex gap-2 text-sm">
                    <span>Account</span>
                    <span>/</span>
                    <span>Gaming</span>
                    <span>/</span>
                    <span className="text-foreground">{product.name}</span>
                </div>

                <div className="grid gap-12 md:grid-cols-5">
                    {/* Product Images */}
                    <div className="col-span-3 grid gap-4 md:grid-cols-4">
                        <div className="col-span-1 flex w-full flex-col gap-4">
                            {product.images.map((image, idx) => (
                                <ImgBtnSlider
                                    key={idx}
                                    src={image}
                                    alt={idx + 1}
                                />
                            ))}
                        </div>
                        <div className="bg-secondary col-span-3 flex-1 overflow-hidden rounded-lg">
                            <img
                                src={product.images[0] || "/placeholder.svg"}
                                alt={product.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <ProductInfo />
                </div>
            </div>
        </section>
    );
}

export default DetailProduct;
