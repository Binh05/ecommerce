import Layout from "@/layout/Layout";
import { PaginationComp } from "@/components/user/PaginationComp";
import SortBy from "./SortBy";
import Products from "./Products";
import FilterBy from "./FilterBy";

function AllProduct() {
    return (
        <Layout>
            <div className="pb-20">
                <div className="grid lg:grid-cols-5">
                    <FilterBy className="col-span-1 mt-4" />
                    <div className="col-span-4 lg:mt-20">
                        <SortBy />
                        <Products />
                        <PaginationComp className="mt-12" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AllProduct;
