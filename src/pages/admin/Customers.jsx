import { useState, useEffect, useMemo } from "react";
import styles from "./moduleCss/products.module.css";
import { Eye, RefreshCw, X } from "lucide-react";
import { CustomerApi } from "@/apis"; 
import { PaginationComp } from "./components/PaginationComp.jsx";
import ActionButton from "./components/ActionButton.jsx"; 
import {DetailPopup, DetailRow} from "./components/DetailPopup.jsx";

const sortOptions = [
    { value: "", label: "Sắp xếp" },
    { value: "spendDesc", label: "Chi tiêu nhiều nhất" },
    { value: "spendAsc", label: "Chi tiêu ít nhất" },
    { value: "ordersDesc", label: "Đặt hàng nhiều nhất" },
    { value: "ordersAsc", label: "Đặt hàng ít nhất" },
];

function CustomerCard({ index, customer, onView }) {
    return (
        <div className={styles.productCard}>
        <div className={styles.productInfo}>
            <span className={styles.index}>{index + 1}</span>
            <div className={styles.textInfo}>
            <h3>{customer.name}</h3>
            <p>{customer.email}</p>
            <span className={styles.stock}>
                Số lần đặt: {customer.totalOrders}
            </span>
            </div>
        </div>
        <div className={styles.productActions}>
            <span className={styles.price}>
                {customer.totalSpent.toLocaleString()}₫
            </span>
            <button
                onClick={() => onView(customer)}
                className={styles.iconBtn}
                title="Xem chi tiết"
            >
                <Eye size={18} />
            </button>
        </div>
        </div>
    );
}

export default function Customers() {
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [customers, setCustomers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        (async () => {
        try {
            const res = await CustomerApi.getCustomersApi();
            setCustomers(res.data || []);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu khách hàng:", error);
        }
        })();
    }, []);

    const filteredCustomers = useMemo(() => {
        let result = customers.filter(
        (c) =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.email.toLowerCase().includes(searchTerm.toLowerCase())
        );

        switch (sortOption) {
        case "spendDesc":
            result = [...result].sort((a, b) => b.totalSpent - a.totalSpent);
            break;
        case "spendAsc":
            result = [...result].sort((a, b) => a.totalSpent - b.totalSpent);
            break;
        case "ordersDesc":
            result = [...result].sort((a, b) => b.totalOrders - a.totalOrders);
            break;
        case "ordersAsc":
            result = [...result].sort((a, b) => a.totalOrders - b.totalOrders);
            break;
        default:
            break;
        }

        return result;
    }, [customers, searchTerm, sortOption]);

    const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
    const paginatedCustomers = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredCustomers.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredCustomers, currentPage]);

    const handleRefresh = async () => {
        try {
        const res = await CustomerApi.getCustomersApi();
        setCustomers(res.data || []);
        setCurrentPage(1);
        } catch (error) {
        console.error("Lỗi khi làm mới dữ liệu khách hàng:", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.filters}>
                <select
                    className={styles.dropdown}
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                    ))}
                </select>
                </div>

                <input
                type="text"
                placeholder="Tìm kiếm khách hàng..."
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
                </div>
            </div>

            <div className={styles.list}>
                {paginatedCustomers.map((customer, index) => (
                <CustomerCard
                    key={customer.id}
                    index={(currentPage - 1) * itemsPerPage + index}
                    customer={customer}
                    onView={setSelectedCustomer}
                />
                ))}
            </div>

            <PaginationComp
                className="mt-6 flex justify-center"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            {selectedCustomer && (
                <DetailPopup
                    title="Chi tiết khách hàng"
                    onClose={() => setSelectedCustomer(null)}
                >
                    <CustomerDetailContent customer={selectedCustomer} />
                </DetailPopup>
            )}
            </div>
        
    );
}
function CustomerDetailContent({ customer }) {
  if (!customer) return null;

  return (
    <div className="space-y-3 text-gray-800">
      <div className="flex items-center gap-4 mb-4">
        {customer.avatar && (
          <img
            src={customer.avatar}
            alt={customer.name}
            className="w-20 h-20 rounded-full border-2 border-red-500 object-cover"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold">{customer.name}</h3>
          <p className="text-gray-500 text-sm">{customer.email}</p>
        </div>
      </div>

      <DetailRow label="Mã khách hàng" value={customer.id} />
      <DetailRow label="Số điện thoại" value={customer.phone} />
      <DetailRow label="Địa chỉ" value={customer.address} />
      <DetailRow label="Ngày tạo tài khoản" value={customer.joinDate} />
      <DetailRow label="Tổng đơn hàng" value={`${customer.totalOrders} đơn`} />
      <DetailRow
        label="Tổng chi tiêu"
        value={customer.totalSpent.toLocaleString("vi-VN") + "₫"}
      />
      <DetailRow
        label="Trạng thái"
        value={
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              customer.isActive
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {customer.isActive ? "Hoạt động" : "Ngừng hoạt động"}
          </span>
        }
      />
    </div>
  );
}

