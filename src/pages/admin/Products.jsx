import { useState, useEffect, useMemo } from "react";
import styles from "./moduleCss/products.module.css";
import { Edit, Trash2, PlusCircle, RefreshCw } from "lucide-react";
import { ProductApi } from "@/apis"; 
import { PaginationComp } from "./components/PaginationComp.jsx";
import ActionButton from "./components/ActionButton.jsx"; 
import ProductPopup from "./components/ProductPopup.jsx"; 
import { categories } from "@/constants/category.js";

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
    const [showModal, setShowModal] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const itemsPerPage = 6;

    // Load dữ liệu sản phẩm
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

    // Lọc và sắp xếp sản phẩm
    const filteredProducts = useMemo(() => {
        let result = products.filter((p) => {
            const matchCategory = categoryFilter === "Tất cả" || p.category === categoryFilter;
            const matchSearch = (p.title || p.name).toLowerCase().includes(searchTerm.toLowerCase());
            return matchCategory && matchSearch;
        });

        switch (sortOption) {
            case "priceAsc": return [...result].sort((a, b) => a.price - b.price);
            case "priceDesc": return [...result].sort((a, b) => b.price - a.price);
            case "stockAsc": return [...result].sort((a, b) => a.stock - b.stock);
            case "stockDesc": return [...result].sort((a, b) => b.stock - a.stock);
            default: return result;
        }
    }, [categoryFilter, searchTerm, sortOption, products]);

    // Phân trang
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredProducts, currentPage]);

    // Làm mới danh sách
    const handleRefresh = async () => {
        try {
            const res = await ProductApi.getPhoneProductApi();
            setProducts(res.data.products || []);
            setCurrentPage(1);
        } catch (error) {
            console.error("Lỗi khi làm mới dữ liệu:", error);
        }
    };

    // Mở popup thêm sản phẩm
    const handleAdd = () => {
        setEditProduct(null);
        setShowModal(true);
    };

    // Mở popup sửa sản phẩm
    const handleEdit = (product) => {
        setEditProduct(product);
        setShowModal(true);
    };

    // Thêm hoặc sửa sản phẩm
    const handleSubmitProduct = (p) => {
        if (editProduct) {
            // Sửa sản phẩm
            setProducts((prev) => prev.map((item) => (item.id === p.id ? p : item)));
        } else {
            // Thêm sản phẩm mới
            setProducts((prev) => [p, ...prev]);
        }
        setShowModal(false);
    };

    const handleDelete = (p) => {
        if (confirm(`Xác nhận xóa sản phẩm "${p.title}"?`)) {
            setProducts((prev) => prev.filter((item) => item.id !== p.id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.filters}>
                    <select className={styles.dropdown} value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        {categories.map((cat) => (
                            <option key={cat.name} value={cat.name}>{cat.name}</option>
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
                    <ActionButton icon={RefreshCw} label="Làm mới" onClick={handleRefresh} color="secondary" />
                    <ActionButton icon={PlusCircle} label="Thêm sản phẩm" onClick={handleAdd} color="primary" />
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

            {showModal && (
                <ProductPopup
                    product={editProduct}
                    onClose={() => setShowModal(false)}
                    onSubmit={handleSubmitProduct}
                />
            )}
        </div>
    );
}
