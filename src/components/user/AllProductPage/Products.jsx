import { useData } from "@/context/dataContext";
import { ProductCard } from "@/components/user/ProductSection";

function Products() {
    const products = useData();

    return (
        <div className="mx-auto mt-4 max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products?.map((product) => (
                    <ProductCard
                        key={product.id}
                        discount={40}
                        name={product.title}
                        image={product.thumbnail}
                        price={product.price}
                        originalPrice={((product.price * 140) / 100).toFixed(2)}
                        rating={Math.round(product.rating)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
