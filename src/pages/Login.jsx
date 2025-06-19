import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
      toast.success("Đăng nhập thành công!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Lỗi đăng nhập");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Bên trái: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6 py-10">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">
            Đăng nhập
          </h2>

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
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Đăng nhập
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </form>
      </div>

      {/* Bên phải: Giới thiệu */}
      <div className="w-full md:w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center px-8 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Chào mừng trở lại!</h2>
        <p className="text-lg max-w-md">
          Hệ thống quản lý Portfolio giúp bạn tạo, chỉnh sửa và trình bày các dự án nổi bật cá nhân. Hãy đăng nhập để bắt đầu hành trình sáng tạo!
        </p>
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="Welcome"
          className="w-64 mt-6 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Login;
