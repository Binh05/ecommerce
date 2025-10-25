import { ProductHeader } from "@/components/user/ProductSection";
import clsx from "clsx";
import { useData } from "@/context/dataContext";

export default function NewArrival() {
    const products = useData().slice(16, 20);

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <ProductHeader title={"New Arrival"} />

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Large Featured Item */}
                    <NewArrivalCard
                        name={products[0]?.title}
                        image={products[0]?.thumbnail}
                        className="md:col-span-2 md:row-span-2"
                    >
                        <p className="mb-4 text-gray-300">
                            Black and White version of the {products[0]?.title}
                            coming out on sale.
                        </p>
                    </NewArrivalCard>

                    {products.slice(1).map((pro, i) => (
                        <NewArrivalCard
                            name={pro.title}
                            image={pro.thumbnail}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function NewArrivalCard({ name, image, className, children }) {
    return (
        <div
            className={clsx(
                "group relative overflow-hidden rounded bg-black text-white",
                className,
            )}
        >
            <img
                src={image || null}
                alt="Perfume"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="mb-1 text-lg font-bold">{name}</h3>
                {children}
                <button className="text-sm text-white underline">
                    Shop Now
                </button>
            </div>
        </div>
    );
}
