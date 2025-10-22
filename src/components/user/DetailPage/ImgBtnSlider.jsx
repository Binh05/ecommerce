function ImgBtnSlider({ ...props }) {
    return (
        <button className="bg-secondary hover:border-primary h-full overflow-hidden rounded-lg transition-all hover:border-2">
            <img {...props} className="h-full w-full object-cover" />
        </button>
    );
}

export default ImgBtnSlider;
