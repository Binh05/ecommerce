import { Link } from "react-router-dom";

function AsideUser() {
    return (
        <aside>
            <ul>
                <li>
                    <Link to="/account/profile">Tài khoản của tôi</Link>
                    <ul className="pl-8">
                        <li>
                            <Link to="/account/profile">Hồ sơ</Link>
                        </li>
                        <li>Địa chỉ</li>
                    </ul>
                </li>
                <li>Đơn mua</li>
            </ul>
        </aside>
    );
}

function AsideBarLink({ children }) {
    return (
        <li>
            <Link>{children}</Link>
        </li>
    );
}

export default AsideUser;
