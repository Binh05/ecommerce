export default function ConfirmPopup({ 
    title = "Xác nhận?", 
    message = "", 
    onCancel, 
    onConfirm 
}) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl text-center w-[400px]">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {message && <p className="mb-4 text-gray-700">{message}</p>}
            <div className="flex justify-center gap-3">
            <button
                onClick={onCancel}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
                Hủy
            </button>
            <button
                onClick={onConfirm}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
                Xác nhận
            </button>
            </div>
        </div>
        </div>
    );
}
