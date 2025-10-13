import Layout from "@/components/Layout";

function Home() {
    return (
        <Layout>
            <div className="relative">
                <div className="absolute bottom-40 left-48 max-w-[30rem] space-y-4">
                    <h1 className="text-primary text-5xl font-bold">
                        Shopping And
                    </h1>
                    <h1 className="text-primary text-5xl font-bold">
                        Department Store
                    </h1>
                    <p className="mt-8 text-xl">
                        Shopping is a bit of a relaxing hobby for me, which is
                        sometimes troubling for the bank balance.
                    </p>
                    <button className="bg-primary mt-8 cursor-pointer rounded-4xl px-8 py-4 text-xl font-bold text-white hover:opacity-50">
                        Learn More
                    </button>
                </div>
                <img
                    src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage.png"
                    loading="lazy"
                    sizes="(max-width: 1439px) 100vw, 1440px"
                    srcset="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage-p-500.png 500w, https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage-p-800.png 800w, https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage-p-1080.png 1080w, https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage.png 1440w"
                    alt=""
                ></img>
            </div>
        </Layout>
    );
}

export default Home;
