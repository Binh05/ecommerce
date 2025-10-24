import { useState, useEffect, useMemo } from "react";
import styles from "./moduleCss/products.module.css";
import { Edit, Trash2, PlusCircle, RefreshCw, Smartphone, Monitor, Phone, Camera, Headphones, Gamepad2 } from "lucide-react";
import { ProductApi } from "@/apis"; 
import { PaginationComp } from "./components/PaginationComp.jsx";
import ActionButton from "./components/ActionButton.jsx"; 

const categories = [
    { name: "Tất cả", icon: null },
    { name: "Phones", icon: Smartphone },
    { name: "Computers", icon: Monitor },
    { name: "SmartWatch", icon: Phone },
    { name: "Camera", icon: Camera },
    { name: "HeadPhones", icon: Headphones },
    { name: "Gaming", icon: Gamepad2 },
];
function ProductCard({ index, product, onEdit, onDelete }) {
    return (
        <div className={styles.productCard}>
            <div className={styles.productInfo}>
                <span className={styles.index}>{index + 1}</span>
                <img src={product.thumbnail || product.image} alt={product.title || product.name} className={styles.productImage} />
                <div className={styles.textInfo}>
                    <h3>{product.title || product.name}</h3>
                    <p>{product.category || "Không rõ danh mục"}</p>
                    <span className={styles.stock}>Còn lại: {product.stock}</span>
                </div>
            </div>
            <div className={styles.productActions}>
                <span className={styles.price}>{product.price.toLocaleString()}₫</span>
                <button onClick={() => onEdit(product)} className={styles.iconBtn}>
                    <Edit size={18} />
                </button>
                <button onClick={() => onDelete(product)} className={styles.iconBtn}>
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
}

export default function Products() {
    const [categoryFilter, setCategoryFilter] = useState("Tất cả");
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        (async () => {
            try {
                const res = await ProductApi.getPhoneProductApi();
                setProducts(res.data.products || []);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
            }
        })();
    }, []);

    const filteredProducts = useMemo(() => {
        let result = products.filter((p) => {
            const matchCategory = categoryFilter === "Tất cả" || p.category === categoryFilter;
            const matchSearch = (p.title || p.name).toLowerCase().includes(searchTerm.toLowerCase());
            return matchCategory && matchSearch;
        });

        switch (sortOption) {
            case "priceAsc":
                result = [...result].sort((a, b) => a.price - b.price);
                break;
            case "priceDesc":
                result = [...result].sort((a, b) => b.price - a.price);
                break;
            case "stockAsc":
                result = [...result].sort((a, b) => a.stock - b.stock);
                break;
            case "stockDesc":
                result = [...result].sort((a, b) => b.stock - a.stock);
                break;
            default:
                break;
        }
        return result;
    }, [categoryFilter, searchTerm, sortOption, products]);

    // Phân trang
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredProducts, currentPage]);

    const handleRefresh = async () => {
        try {
            const res = await ProductApi.getPhoneProductApi();
            setProducts(res.data.products || []);
            setCurrentPage(1);
        } catch (error) {
            console.error("Lỗi khi làm mới dữ liệu:", error);
        }
    };
    const handleAdd = () => console.log("Thêm sản phẩm mới");
    const handleEdit = (p) => console.log("Sửa:", p);
    const handleDelete = (p) => console.log("Xóa:", p);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.filters}>
                    <select className={styles.dropdown} value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        {categories.map((cat) => (
                            <option key={cat.name} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    <select className={styles.dropdown} value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="">Sắp xếp</option>
                        <option value="priceAsc">Giá tăng dần</option>
                        <option value="priceDesc">Giá giảm dần</option>
                        <option value="stockAsc">Số lượng tăng dần</option>
                        <option value="stockDesc">Số lượng giảm dần</option>
                    </select>
                </div>

                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className={styles.headerActions}>
                    <ActionButton
                        icon={RefreshCw}
                        label="Làm mới"
                        onClick={handleRefresh}
                        color="secondary"
                    />
                    <ActionButton
                        icon={PlusCircle}
                        label="Thêm sản phẩm"
                        onClick={handleAdd}
                        color="primary"
                    />
                </div>
            </div>

            <div className={styles.list}>
                {paginatedProducts.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        index={(currentPage - 1) * itemsPerPage + index}
                        product={product}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            <PaginationComp
                className="mt-6 flex justify-center"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
