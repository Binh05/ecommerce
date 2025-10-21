export default function PromoSection() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="overflow-hidden rounded bg-black text-white">
                    <div className="grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12">
                        {/* Left Content */}
                        <div className="flex flex-col gap-6">
                            <p className="font-semibold text-green-500">
                                Categories
                            </p>
                            <h2 className="text-3xl leading-tight font-bold md:text-4xl">
                                Enhance Your Music Experience
                            </h2>
                            <button className="w-fit rounded bg-green-500 px-8 py-3 font-semibold text-white transition hover:bg-green-600">
                                Buy Now
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <img
                                src="/jbl-speaker-black-portable.jpg"
                                alt="Speaker"
                                className="w-full max-w-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
