import { useState, useEffect, useMemo } from "react";
import styles from "./moduleCss/products.module.css";
import { Eye, PlusCircle, RefreshCw, Check} from "lucide-react";

import { OrderApi } from "@/apis";
import { PaginationComp } from "./components/PaginationComp.jsx";
import ActionButton from "./components/ActionButton.jsx"; 

const statuses = ["Tất cả", "Chờ xác nhận", "Đã xác nhận"];

function OrderCard({ order, onConfirm, onView }) {
    return (
        <div className={styles.orderCard}>
            <div className={styles.orderInfo}>
                <span>{order.id}</span>
                <span>{order.customer}</span>
                <span>{order.email}</span>
                <span>{order.total.toLocaleString()}₫</span>
                <span>{order.date}</span>
            </div>
            <div className={styles.orderActions}>
                {order.status === "Chờ xác nhận" ? (
                    <button
                        className={styles.confirmBtn}
                        onClick={() => onConfirm(order)}
                    >
                        <Check size={16} /> Xác nhận
                    </button>
                ) : (
                    <button className={styles.confirmedBtn} disabled>
                        <Check size={16} /> Đã xác nhận
                    </button>
                )}

                <button className={styles.viewBtn} onClick={() => onView(order)}>
                    <Eye size={16} /> Xem
                </button>
            </div>
        </div>
    );
}

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [statusFilter, setStatusFilter] = useState("Tất cả");
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        (async () => {
            try {
                const res = await OrderApi.getOrdersApi();
                // Nếu API chưa có ngày, thêm tạm để demo
                const dataWithDate = (res.data || []).map((o) => ({
                    ...o,
                    date: o.date || "2025-10-20",
                }));
                setOrders(dataWithDate);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    const filteredOrders = useMemo(() => {
        return orders.filter((o) => {
            const matchStatus = statusFilter === "Tất cả" || o.status === statusFilter;
            const matchSearch = o.customer.toLowerCase().includes(searchTerm.toLowerCase());

            const orderDate = new Date(o.date);
            const from = startDate ? new Date(startDate) : null;
            const to = endDate ? new Date(endDate) : null;

            const matchDate =
                (!from || orderDate >= from) &&
                (!to || orderDate <= to);

            return matchStatus && matchSearch && matchDate;
        });
    }, [orders, statusFilter, searchTerm, startDate, endDate]);

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const paginatedOrders = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredOrders.slice(start, start + itemsPerPage);
    }, [filteredOrders, currentPage]);

    const handleConfirm = (order) => {
        setOrders((prev) =>
            prev.map((o) => (o.id === order.id ? { ...o, status: "Đã xác nhận" } : o))
        );
    };

    const handleView = (order) => alert(JSON.stringify(order, null, 2));

    const handleRefresh = async () => {
        try {
            const res = await OrderApi.getOrdersApi();
            const dataWithDate = (res.data || []).map((o) => ({
                ...o,
                date: o.date || "2025-10-20",
            }));
            setOrders(dataWithDate);
            setCurrentPage(1);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <select
                    className={styles.dropdown}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    {statuses.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Tìm kiếm ..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Bộ lọc ngày */}
                <div className={styles.dateFilter}>
                    <label>Từ: </label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className={styles.dateInput}
                    />
                    <label>Đến: </label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className={styles.dateInput}
                    />
                </div>

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
                {paginatedOrders.map((order) => (
                    <OrderCard
                        key={order.id}
                        order={order}
                        onConfirm={handleConfirm}
                        onView={handleView}
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
