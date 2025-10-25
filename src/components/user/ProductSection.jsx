import clsx from "clsx";
import { Heart, Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function ProductHeader({ title, children, className }) {
    return (
        <div
            className={clsx(
                "mb-8 flex items-center justify-between",
                className,
            )}
        >
            <div className="flex items-center gap-4">
                <div className="bg-primary h-8 w-4 rounded"></div>
                <h2 className="text-primary text-2xl font-bold md:text-3xl">
                    {title}
                </h2>
            </div>
            {children}
        </div>
    );
}

function ProductCard({
    id = 104,
    discount,
    image,
    name,
    price,
    originalPrice,
    rating = 5,
    reviews = 90,
    product,
    trash = false,
}) {
    return (
        <Link to={`/detail/${id}`} className="group">
            <div className="relative mb-4 aspect-square overflow-hidden rounded bg-gray-100">
                {discount && (
                    <div className="absolute top-3 left-3 z-10 rounded bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                        {discount}%
                    </div>
                )}
                <img
                    loading="lazy"
                    src={image || product?.thumbnail}
                    alt={name || product.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
                    {trash ? (
                        <IconBtn>
                            <Trash2 size={20} />
                        </IconBtn>
                    ) : (
                        <>
                            <IconBtn>
                                <Heart size={20} />
                            </IconBtn>
                            <IconBtn>
                                <Eye size={20} />
                            </IconBtn>
                        </>
                    )}
                </div>
            </div>
            <h3 className="mb-2 font-semibold">{name || product.name}</h3>
            <div className="mb-2 flex items-center gap-2">
                <span className="font-bold text-red-500">
                    ${price || product.price}
                </span>
                {originalPrice ? (
                    <span className="text-gray-400 line-through">
                        ${originalPrice}
                    </span>
                ) : null}
            </div>
            <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                    {[...Array(rating || Math.round(product.rating))].map(
                        (_, i) => (
                            <span key={i}>★</span>
                        ),
                    )}
                </div>
                <span className="text-sm text-gray-600">({reviews})</span>
            </div>
        </Link>
    );
}

function IconBtn({ children }) {
    return (
        <button className="rounded-full bg-white p-2 transition hover:bg-red-500 hover:text-white">
            {children}
        </button>
    );
}

export { ProductHeader, ProductCard };
