import AccountHeader from "@/components/user/ProfilePage/AccountHeader";
import AsideUser from "@/components/user/ProfilePage/AsideUser";
import Profile from "@/components/user/ProfilePage/Profile";
import Layout from "@/layout/Layout";

function ProfilePage() {
    return (
        <Layout topbanner={false}>
            <div className="mx-auto grid max-w-7xl grid-cols-5 px-4 py-16">
                <div className="col-span-1">
                    <AccountHeader />
                    <AsideUser />
                </div>
                <div className="col-span-4">
                    <Profile />
                </div>
            </div>
        </Layout>
    );
}

export default ProfilePage;
