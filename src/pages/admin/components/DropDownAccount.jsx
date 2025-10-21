import { useState } from "react";
import styles from "../moduleCss/dropDownAccount.module.css";

function DropdownMenu({ avatarUrl }) {
 const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.userMenu}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={styles.userBtn}>
        <img
          src={avatarUrl}
          alt="avatar"
          className={styles.avatar}
        />
        ▼
      </button>
      {open && (
        <ul className={styles.dropdown}>
          <li><button>Đổi mật khẩu</button></li>
          <li><button>Đăng xuất</button></li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
