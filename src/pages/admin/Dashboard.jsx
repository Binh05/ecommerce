import styles from "./moduleCss/dashboard.module.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";
import { useState, useEffect } from "react";
import { ProductApi } from "@/apis"; 

import khachHang from "./pictures/khachHang.png";
import sanPham from "./pictures/sanPham.png";
import doanhThu from "./pictures/doanhThu.png";
import donHang from "./pictures/donHang.png";


function CardThongKe({item, i}) {
    return (
        <div key={i} className={styles.card}>
            <div className={styles.cardInner}>
                <div
                    className={styles.cardImageWrapper}
                >
                    <img src={item.img} alt={item.title} className={styles.cardImg} />
                </div>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardValue}>{item.value}</p>
            </div>
        </div>
    );
}
function Dashboard() {
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const res = await ProductApi.getPhoneProductApi();
                setProductCount(res.data.products.length);
            } catch (error) {
                console.error("Lỗi lấy sản phẩm:", error);
            }
        })();
    }, []);

    const dataCards = [
        { title: "Khách hàng", value: "1,245", img: khachHang },
        { title: "Sản phẩm", value: productCount, img: sanPham }, // 🔹 dùng state productCount
        { title: "Doanh thu", value: "82.500.000₫", img: doanhThu },
        { title: "Đơn hàng", value: "3.000", img: donHang },
    ];
    const chartData = [
        { month: "Jan", revenue: 2500000, orders: 40 },
        { month: "Feb", revenue: 3200000, orders: 52 },
        { month: "Mar", revenue: 4500000, orders: 68 },
        { month: "Apr", revenue: 3700000, orders: 55 },
        { month: "May", revenue: 5200000, orders: 80 },
        { month: "Jun", revenue: 6100000, orders: 90 },
    ];
    return (
        <div className={styles.dashboard}>
            <div className={styles.cardContainer}>
                {dataCards.map((item, i) => (
                    <CardThongKe item={item} i={i} />
                ))}
            </div>

            <div className={styles.chartSection}>
                <h2 className={styles.chartTitle}>Doanh thu trong 6 tháng gần nhất</h2>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis
                            tickFormatter={(value) =>
                                value >= 1000000
                                ? (value / 1000000).toFixed(1) + "Triệu"
                                : value.toLocaleString()
                            }
                            />
                            <Tooltip
                            formatter={(value, name) => {
                                if (name === "revenue") {
                                    return [value.toLocaleString("en-US") + "₫", "Doanh thu"];
                                } else if (name === "orders") {
                                    return [value.toLocaleString("en-US"), "Đơn hàng"];
                                }
                                return value;
                            }}

                            />
                            <Bar dataKey="revenue" fill="#ef4444" name="Doanh thu" />
                            <Bar dataKey="orders" fill="#F59E0B" name="Đơn hàng" />
                        </BarChart>
                     </ResponsiveContainer>

            </div>

            <div className={styles.chartSection}>
                <h2 className={styles.chartTitle}>Số lượng đơn hàng bán ra trong 6 tháng gần nhất</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="orders" stroke="#10B981" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Dashboard;
