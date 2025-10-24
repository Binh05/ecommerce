import { X, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { categories } from "@/constants/category.js";

export default function ProductPopup({ onClose, onSubmit, product = null, mode = "add" }) {
  const isEditMode = mode === "edit";

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    thumbnail: "",
  });

  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // --- Gán dữ liệu sản phẩm khi sửa ---
  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        category: product.category || "",
        price: product.price || "",
        stock: product.stock || "",
        description: product.description || "",
        thumbnail: product.thumbnail || "",
      });
      setPreview(product.thumbnail || null);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (file) => {
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setPreview(imgUrl);
      setFormData((prev) => ({ ...prev, thumbnail: imgUrl }));
    }
  };

  const handleFileInput = (e) => handleImageChange(e.target.files[0]);
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageChange(file);
    setDragActive(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price) {
      alert("Vui lòng nhập tên và giá sản phẩm!");
      return;
    }

    // Khi nhấn Lưu -> mở popup xác nhận
    setShowConfirm(true);
  };

  const confirmSubmit = () => {
    const finalProduct = {
      id: product?.id || Date.now(),
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock || "0"),
      thumbnail: formData.thumbnail || "https://via.placeholder.com/150",
    };

    onSubmit(finalProduct);
    setShowConfirm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden animate-fadeIn relative">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-red-600 text-white">
          <h2 className="text-lg font-semibold">
            {product ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
          </h2>
          <button onClick={onClose} className="hover:text-gray-200">
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 p-6">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <Input label="Tên sản phẩm" name="title" value={formData.title} onChange={handleChange} />
            <Select
              label="Danh mục"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={categories}
            />
            <Input label="Giá (₫)" name="price" type="number" value={formData.price} onChange={handleChange} />
            <Input label="Số lượng tồn" name="stock" type="number" value={formData.stock} onChange={handleChange} />
            <Textarea label="Mô tả sản phẩm" name="description" value={formData.description} onChange={handleChange} />
          </div>

          {/* Right: Upload ảnh */}
          <div
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 transition-all duration-200 ${
              dragActive ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
            }`}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >
            {preview ? (
              <img src={preview} alt="Preview" className="w-56 h-56 object-cover rounded-xl shadow-md mb-4" />
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <Upload size={40} className="mb-2" />
                <p className="text-sm text-center">Kéo & thả ảnh hoặc chọn ảnh từ tệp</p>
              </div>
            )}
            <label className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition">
              Chọn ảnh
              <input type="file" accept="image/*" className="hidden" onChange={handleFileInput} />
            </label>
          </div>
        </form>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Hủy
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
          >
            {product ? "Lưu thay đổi" : "Thêm sản phẩm"}
          </button>
        </div>
      </div>

      {/* Popup xác nhận */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center w-[400px]">
            <h3 className="text-lg font-semibold mb-4">
              {product ? "Xác nhận lưu thay đổi?" : "Xác nhận thêm sản phẩm?"}
            </h3>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={confirmSubmit}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Input / Select / Textarea tái sử dụng */
function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none transition"
      />
    </div>
  );
}

function Textarea({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="border border-gray-300 rounded-lg px-3 py-2 resize-none focus:ring-2 focus:ring-red-500 outline-none transition"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none transition"
      >
        <option value="">-- Chọn danh mục --</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}
