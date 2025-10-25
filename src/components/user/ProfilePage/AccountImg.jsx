import Avatar from "@/components/base/Avatar";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useRef, useState } from "react";

function AccountImg({ className }) {
    const [preview, setPreview] = useState(null);
    const fileRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleInputFile = () => {
        fileRef.current?.click();
    };

    return (
        <div
            className={clsx(
                "flex w-full flex-col items-center gap-4 py-8",
                className,
            )}
        >
            <Avatar size={100} src={preview} />
            <input
                type="file"
                accept="image/*"
                ref={fileRef}
                className="hidden"
                onChange={handleFileChange}
            />
            <Button variant="outline" onClick={handleInputFile}>
                Chọn Ảnh
            </Button>
            <p className="text-ring text-center">Dung lượng file tối đa 1MB</p>
        </div>
    );
}

export default AccountImg;
