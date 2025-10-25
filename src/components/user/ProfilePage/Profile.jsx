import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import AccountImg from "./AccountImg";

function Profile() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 150 }, (_, i) => 2030 - i);
    return (
        <section className="rounded p-8 shadow-[0px_0px_1rem_rgba(0,0,0,0.3)]">
            <div>
                <h1>Hồ sơ của tôi</h1>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>
            <hr className="my-8" />
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <form action="POST" className="col-span-2 space-y-4 px-16">
                    <InputProfile
                        id="username"
                        placeholder="Enter your user name"
                    >
                        Tên đăng nhập
                    </InputProfile>
                    <InputProfile id="name" placeholder="Enter your full name">
                        Tên
                    </InputProfile>

                    <label htmlFor="">Email</label>
                    <Input />
                    <label htmlFor="">Số điện thoại</label>
                    <Input />

                    <label>Giới tính</label>
                    <div className="flex gap-4">
                        <div className="space-x-2">
                            <input type="radio" id="male" name="sex" />
                            <label htmlFor="male">Nam</label>
                        </div>
                        <div className="space-x-2">
                            <input type="radio" id="female" name="sex" />
                            <label htmlFor="female">Nữ</label>
                        </div>
                        <div className="space-x-2">
                            <input type="radio" id="orther" name="sex" />
                            <label htmlFor="orther">Khác</label>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="">Ngày sinh</label>
                        <SelectBD array={days} />
                        <SelectBD array={months} />
                        <SelectBD array={years} />
                    </div>
                    <input
                        type="submit"
                        className="bg-primary ml-[78%] rounded px-8 py-2 text-white"
                        value="Lưu"
                    />
                </form>
                <AccountImg className="-order-1 h-fit lg:order-1 lg:border-l" />
            </div>
        </section>
    );
}

function InputProfile({ id, children, ...props }) {
    return (
        <div>
            <label htmlFor={id}>{children}</label>
            <Input
                className={clsx("mt-3", props.className)}
                id={id}
                {...props}
            />
        </div>
    );
}

function SelectBD({ array }) {
    return (
        <Select>
            <SelectTrigger className="w-30">
                <SelectValue placeholder="Ngày" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Ngay</SelectLabel>
                    {array.map((day, i) => (
                        <SelectItem key={i} value={`${day}`}>
                            {day}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export default Profile;
