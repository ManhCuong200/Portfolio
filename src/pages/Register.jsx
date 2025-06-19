import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      toast.success("Đăng ký thành công, mời đăng nhập!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Lỗi đăng ký");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Bên trái: Form đăng ký */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6 py-10">
        <form
          onSubmit={handleRegister}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">
            Đăng ký
          </h2>

          <input
            type="text"
            placeholder="Tên của bạn"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full mb-6 px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Đăng ký
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Đã có tài khoản?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Đăng nhập ngay
            </Link>
          </p>
        </form>
      </div>

      {/* Bên phải: Giới thiệu */}
      <div className="w-full md:w-1/2 bg-green-600 text-white flex flex-col justify-center items-center px-8 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Tạo tài khoản mới</h2>
        <p className="text-lg max-w-md">
          Tham gia ngay để bắt đầu quản lý portfolio cá nhân của bạn. Tạo hồ sơ,
          thêm dự án, và thể hiện kỹ năng nổi bật của bạn với nhà tuyển dụng!
        </p>
        <img
          src="https://i.imgur.com/4M34hi2.png" // Thay bằng hình ảnh minh họa
          alt="Register Illustration"
          className="w-64 mt-6 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Register;
