import Avatar from "@/components/base/Avatar";
import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";

function AccountHeader() {
    return (
        <div className="flex items-center gap-4 py-8">
            <Avatar size={30} />
            <div>
                <p>user name</p>
                <Link to="/account/profile" className="flex items-center gap-2">
                    <Pencil size={16} />
                    Sửa hồ sơ
                </Link>
            </div>
        </div>
    );
}

export default AccountHeader;
