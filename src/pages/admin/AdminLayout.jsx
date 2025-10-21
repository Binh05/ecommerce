import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./moduleCss/adminLayout.module.css";
import DropdownMenu from "./components/DropDownAccount.jsx";

import dashboardIcon from "./pictures/dashboardIcon.png";
import productIcon from "./pictures/productIcon.png";
import orderIcon from "./pictures/orderIcon.png";
import userIcon from "./pictures/userIcon.png";
 
function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

   const menuItems = [
    { name: "Dashboard", path: "/admin/Dashboard", icon: dashboardIcon },
    { name: "Sản phẩm", path: "/admin/Products", icon: productIcon },
    { name: "Đơn hàng", path: "/admin/Orders", icon: orderIcon },
    { name: "Khách hàng", path: "/admin/Customers", icon: userIcon },
  ];

  return (
    <div className={styles.adminLayout}>
      <aside
        className={`${styles.sidebar} ${!isSidebarOpen ? styles.sidebarClosed : ""}`}
      >
        <h2 className={styles.logo}>
          {isSidebarOpen ? "Bình đẹp trai" : "B"}
        </h2>

        <nav>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={
                  location.pathname === item.path ? styles.activeLink : ""
                }
              >
                <Link to={item.path}>
                  <img src={item.icon} alt={item.name} className={styles.icon} />
                  {isSidebarOpen && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className={styles.mainArea}>
        <header className={styles.navbar}>
          <button
            className={styles.menuBtn}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <div className={styles.rightIcons}>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className={styles.searchBar}
            />
            <DropdownMenu avatarUrl={"https://tse1.mm.bing.net/th/id/OIP.oEyuICoK3gMcmZo4Cz8zLwHaHy?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"} />
          </div>
        </header>

        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
